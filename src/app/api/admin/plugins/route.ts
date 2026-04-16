import { NextRequest, NextResponse } from "next/server";
import {
  getPlugins,
  savePlugins,
  Plugin,
  createPlugin,
  updatePlugin,
  deletePlugin,
} from "@/lib/db";

function validateAuth(request: NextRequest): boolean {
  const authHeader = request.headers.get("Authorization");
  const token = authHeader?.replace("Bearer ", "");
  return token === process.env.ADMIN_SECRET;
}

export async function GET(request: NextRequest) {
  if (!validateAuth(request)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const plugins = getPlugins(false);
  return NextResponse.json({ plugins });
}

export async function POST(request: NextRequest) {
  if (!validateAuth(request)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const body = await request.json();

    // Validate required fields
    const required = [
      "slug",
      "name",
      "tagline",
      "description",
      "longDescription",
      "price",
      "type",
      "formats",
    ];
    for (const field of required) {
      if (!body[field]) {
        return NextResponse.json(
          { error: `Missing required field: ${field}` },
          { status: 400 }
        );
      }
    }

    const newPlugin = createPlugin({
      slug: body.slug,
      name: body.name,
      tagline: body.tagline,
      description: body.description,
      longDescription: body.longDescription,
      price: body.price,
      salePrice: body.salePrice || null,
      type: body.type,
      formats: body.formats,
      image: body.image || "",
      thumbnail: body.thumbnail || "",
      videoUrl: body.videoUrl || "",
      screenshots: body.screenshots || [],
      specs: body.specs || {},
      features: body.features || [],
      version: body.version || "1.0.0",
      releaseDate: body.releaseDate || new Date().toISOString().split("T")[0],
      published: body.published !== undefined ? body.published : true,
    });

    return NextResponse.json(newPlugin, { status: 201 });
  } catch (error) {
    console.error("Error creating plugin:", error);
    return NextResponse.json(
      { error: "Failed to create plugin" },
      { status: 500 }
    );
  }
}

export async function PUT(request: NextRequest) {
  if (!validateAuth(request)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const body = await request.json();
    const { slug } = body;

    if (!slug) {
      return NextResponse.json(
        { error: "Missing slug parameter" },
        { status: 400 }
      );
    }

    const updated = updatePlugin(slug, body);
    if (!updated) {
      return NextResponse.json(
        { error: "Plugin not found" },
        { status: 404 }
      );
    }

    return NextResponse.json(updated);
  } catch (error) {
    console.error("Error updating plugin:", error);
    return NextResponse.json(
      { error: "Failed to update plugin" },
      { status: 500 }
    );
  }
}

export async function DELETE(request: NextRequest) {
  if (!validateAuth(request)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const { searchParams } = new URL(request.url);
    const slug = searchParams.get("slug");

    if (!slug) {
      return NextResponse.json(
        { error: "Missing slug query parameter" },
        { status: 400 }
      );
    }

    const deleted = deletePlugin(slug);
    if (!deleted) {
      return NextResponse.json(
        { error: "Plugin not found" },
        { status: 404 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error deleting plugin:", error);
    return NextResponse.json(
      { error: "Failed to delete plugin" },
      { status: 500 }
    );
  }
}
