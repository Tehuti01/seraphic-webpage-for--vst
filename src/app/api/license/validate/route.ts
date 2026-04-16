import { NextRequest, NextResponse } from "next/server";
import crypto from "crypto";

// Mock license database - replace with Supabase/Prisma in production
const mockLicenses: Record<string, any> = {
  "SRPH-XXXX-XXXX-XXXX": {
    user_id: "user_123",
    plugin_id: "phi-synth",
    status: "active",
    tier: "architect",
    max_devices: 3,
    activated_devices: ["machine_id_1", "machine_id_2"],
    expires_at: null,
  },
};

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { licenseKey, machineId } = body;

    // Validate inputs
    if (!licenseKey || !machineId) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Look up license (mock)
    const license = mockLicenses[licenseKey];

    if (!license) {
      return NextResponse.json(
        { error: "License not found" },
        { status: 404 }
      );
    }

    // Check status
    if (license.status !== "active") {
      return NextResponse.json(
        { error: "License is not active" },
        { status: 403 }
      );
    }

    // Check expiration
    if (license.expires_at && new Date(license.expires_at) < new Date()) {
      return NextResponse.json(
        { error: "License has expired" },
        { status: 403 }
      );
    }

    // Check activation limit
    const activatedDevices = license.activated_devices || [];
    if (
      !activatedDevices.includes(machineId) &&
      activatedDevices.length >= license.max_devices
    ) {
      return NextResponse.json(
        { error: "Maximum device activations exceeded" },
        { status: 403 }
      );
    }

    // Add machine to activated devices if not already there
    if (!activatedDevices.includes(machineId)) {
      license.activated_devices.push(machineId);
    }

    // Generate activation token (JWT-like)
    const token = crypto.randomBytes(32).toString("hex");
    const expiresAt = new Date();
    expiresAt.setHours(expiresAt.getHours() + 24);

    return NextResponse.json({
      success: true,
      token,
      expiresAt,
      license: {
        key: licenseKey,
        plugin: license.plugin_id,
        tier: license.tier,
        status: license.status,
      },
    });
  } catch (error) {
    console.error("License validation error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
