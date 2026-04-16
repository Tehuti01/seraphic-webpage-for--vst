"use client";

import { useState } from "react";
import { Plugin } from "@/lib/db";

interface PluginAdminProps {
  initialPlugins: Plugin[];
}

export default function PluginAdmin({ initialPlugins }: PluginAdminProps) {
  const [plugins, setPlugins] = useState<Plugin[]>(initialPlugins);
  const [editingSlug, setEditingSlug] = useState<string | null>(null);
  const [showForm, setShowForm] = useState(false);
  const [deleteConfirm, setDeleteConfirm] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  const [formData, setFormData] = useState<Partial<Plugin>>({
    slug: "",
    name: "",
    tagline: "",
    description: "",
    longDescription: "",
    price: 0,
    salePrice: null,
    type: "synth",
    formats: ["VST3"],
    image: "",
    thumbnail: "",
    videoUrl: "",
    screenshots: [],
    specs: {},
    features: [],
    version: "1.0.0",
    releaseDate: new Date().toISOString().split("T")[0],
    published: true,
  });

  const resetForm = () => {
    setFormData({
      slug: "",
      name: "",
      tagline: "",
      description: "",
      longDescription: "",
      price: 0,
      salePrice: null,
      type: "synth",
      formats: ["VST3"],
      image: "",
      thumbnail: "",
      videoUrl: "",
      screenshots: [],
      specs: {},
      features: [],
      version: "1.0.0",
      releaseDate: new Date().toISOString().split("T")[0],
      published: true,
    });
    setEditingSlug(null);
    setShowForm(false);
  };

  const startEdit = (plugin: Plugin) => {
    setFormData(plugin);
    setEditingSlug(plugin.slug);
    setShowForm(true);
    setError(null);
  };

  const startCreate = () => {
    resetForm();
    setShowForm(true);
    setError(null);
  };

  const handleSave = async () => {
    try {
      setError(null);

      const endpoint = editingSlug
        ? `/api/admin/plugins`
        : `/api/admin/plugins`;

      const method = editingSlug ? "PUT" : "POST";

      const response = await fetch(endpoint, {
        method,
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_ADMIN_SECRET || "seraphic-admin-secret"}`,
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.error || "Failed to save plugin");
      }

      const saved = await response.json();

      if (editingSlug) {
        setPlugins(plugins.map((p) => (p.slug === editingSlug ? saved : p)));
        setSuccess("Plugin updated successfully");
      } else {
        setPlugins([...plugins, saved]);
        setSuccess("Plugin created successfully");
      }

      resetForm();
    } catch (err) {
      setError(err instanceof Error ? err.message : "An error occurred");
    }
  };

  const handleDelete = async (slug: string) => {
    try {
      setError(null);

      const response = await fetch(`/api/admin/plugins?slug=${slug}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_ADMIN_SECRET || "seraphic-admin-secret"}`,
        },
      });

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.error || "Failed to delete plugin");
      }

      setPlugins(plugins.filter((p) => p.slug !== slug));
      setSuccess("Plugin deleted successfully");
      setDeleteConfirm(null);
    } catch (err) {
      setError(err instanceof Error ? err.message : "An error occurred");
    }
  };

  return (
    <div className="min-h-screen py-[var(--phi-8)] px-[var(--phi-5)] bg-[var(--c-abyss)]">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-[var(--type-4xl)] font-light text-[var(--c-text-primary)] mb-[var(--phi-8)]">
          Plugin Admin
        </h1>

        {error && (
          <div className="mb-6 p-4 bg-red-500/20 border border-red-500/50 rounded-[var(--r-lg)] text-red-200">
            {error}
          </div>
        )}

        {success && (
          <div className="mb-6 p-4 bg-green-500/20 border border-green-500/50 rounded-[var(--r-lg)] text-green-200">
            {success}
          </div>
        )}

        {/* Form Section */}
        {showForm && (
          <div className="s-card-glass p-[var(--phi-5)] rounded-[var(--r-lg)] mb-[var(--phi-8)]">
            <h2 className="text-[var(--type-2xl)] font-light text-[var(--c-text-primary)] mb-[var(--phi-4)]">
              {editingSlug ? "Edit Plugin" : "Add New Plugin"}
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-[var(--phi-4)]">
              {/* Slug */}
              <div>
                <label className="block text-[var(--type-sm)] text-[var(--c-text-muted)] mb-2">
                  Slug
                </label>
                <input
                  type="text"
                  disabled={!!editingSlug}
                  value={formData.slug || ""}
                  onChange={(e) =>
                    setFormData({ ...formData, slug: e.target.value })
                  }
                  className="w-full px-3 py-2 bg-[var(--c-surface-2)] border border-[var(--c-border)] rounded-[var(--r-md)] text-[var(--c-text-primary)] text-[var(--type-sm)]"
                />
              </div>

              {/* Name */}
              <div>
                <label className="block text-[var(--type-sm)] text-[var(--c-text-muted)] mb-2">
                  Name
                </label>
                <input
                  type="text"
                  value={formData.name || ""}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="w-full px-3 py-2 bg-[var(--c-surface-2)] border border-[var(--c-border)] rounded-[var(--r-md)] text-[var(--c-text-primary)] text-[var(--type-sm)]"
                />
              </div>

              {/* Tagline */}
              <div className="md:col-span-2">
                <label className="block text-[var(--type-sm)] text-[var(--c-text-muted)] mb-2">
                  Tagline
                </label>
                <input
                  type="text"
                  value={formData.tagline || ""}
                  onChange={(e) =>
                    setFormData({ ...formData, tagline: e.target.value })
                  }
                  className="w-full px-3 py-2 bg-[var(--c-surface-2)] border border-[var(--c-border)] rounded-[var(--r-md)] text-[var(--c-text-primary)] text-[var(--type-sm)]"
                />
              </div>

              {/* Description */}
              <div className="md:col-span-2">
                <label className="block text-[var(--type-sm)] text-[var(--c-text-muted)] mb-2">
                  Description
                </label>
                <textarea
                  value={formData.description || ""}
                  onChange={(e) =>
                    setFormData({ ...formData, description: e.target.value })
                  }
                  rows={2}
                  className="w-full px-3 py-2 bg-[var(--c-surface-2)] border border-[var(--c-border)] rounded-[var(--r-md)] text-[var(--c-text-primary)] text-[var(--type-sm)]"
                />
              </div>

              {/* Long Description */}
              <div className="md:col-span-2">
                <label className="block text-[var(--type-sm)] text-[var(--c-text-muted)] mb-2">
                  Long Description
                </label>
                <textarea
                  value={formData.longDescription || ""}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      longDescription: e.target.value,
                    })
                  }
                  rows={3}
                  className="w-full px-3 py-2 bg-[var(--c-surface-2)] border border-[var(--c-border)] rounded-[var(--r-md)] text-[var(--c-text-primary)] text-[var(--type-sm)]"
                />
              </div>

              {/* Price */}
              <div>
                <label className="block text-[var(--type-sm)] text-[var(--c-text-muted)] mb-2">
                  Price
                </label>
                <input
                  type="number"
                  value={formData.price || 0}
                  onChange={(e) =>
                    setFormData({ ...formData, price: parseFloat(e.target.value) })
                  }
                  className="w-full px-3 py-2 bg-[var(--c-surface-2)] border border-[var(--c-border)] rounded-[var(--r-md)] text-[var(--c-text-primary)] text-[var(--type-sm)]"
                />
              </div>

              {/* Sale Price */}
              <div>
                <label className="block text-[var(--type-sm)] text-[var(--c-text-muted)] mb-2">
                  Sale Price (optional)
                </label>
                <input
                  type="number"
                  value={formData.salePrice || ""}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      salePrice: e.target.value ? parseFloat(e.target.value) : null,
                    })
                  }
                  className="w-full px-3 py-2 bg-[var(--c-surface-2)] border border-[var(--c-border)] rounded-[var(--r-md)] text-[var(--c-text-primary)] text-[var(--type-sm)]"
                />
              </div>

              {/* Type */}
              <div>
                <label className="block text-[var(--type-sm)] text-[var(--c-text-muted)] mb-2">
                  Type
                </label>
                <select
                  value={formData.type || "synth"}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      type: e.target.value as "synth" | "effect" | "dynamics" | "spatial",
                    })
                  }
                  className="w-full px-3 py-2 bg-[var(--c-surface-2)] border border-[var(--c-border)] rounded-[var(--r-md)] text-[var(--c-text-primary)] text-[var(--type-sm)]"
                >
                  <option value="synth">Synth</option>
                  <option value="effect">Effect</option>
                  <option value="dynamics">Dynamics</option>
                  <option value="spatial">Spatial</option>
                </select>
              </div>

              {/* Image Path */}
              <div>
                <label className="block text-[var(--type-sm)] text-[var(--c-text-muted)] mb-2">
                  Image Path
                </label>
                <input
                  type="text"
                  value={formData.image || ""}
                  onChange={(e) =>
                    setFormData({ ...formData, image: e.target.value })
                  }
                  placeholder="/plugins/slug/hero.png"
                  className="w-full px-3 py-2 bg-[var(--c-surface-2)] border border-[var(--c-border)] rounded-[var(--r-md)] text-[var(--c-text-primary)] text-[var(--type-sm)]"
                />
              </div>

              {/* Thumbnail Path */}
              <div>
                <label className="block text-[var(--type-sm)] text-[var(--c-text-muted)] mb-2">
                  Thumbnail Path
                </label>
                <input
                  type="text"
                  value={formData.thumbnail || ""}
                  onChange={(e) =>
                    setFormData({ ...formData, thumbnail: e.target.value })
                  }
                  placeholder="/plugins/slug/thumb.png"
                  className="w-full px-3 py-2 bg-[var(--c-surface-2)] border border-[var(--c-border)] rounded-[var(--r-md)] text-[var(--c-text-primary)] text-[var(--type-sm)]"
                />
              </div>

              {/* Version */}
              <div>
                <label className="block text-[var(--type-sm)] text-[var(--c-text-muted)] mb-2">
                  Version
                </label>
                <input
                  type="text"
                  value={formData.version || "1.0.0"}
                  onChange={(e) =>
                    setFormData({ ...formData, version: e.target.value })
                  }
                  className="w-full px-3 py-2 bg-[var(--c-surface-2)] border border-[var(--c-border)] rounded-[var(--r-md)] text-[var(--c-text-primary)] text-[var(--type-sm)]"
                />
              </div>

              {/* Published */}
              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={formData.published || false}
                  onChange={(e) =>
                    setFormData({ ...formData, published: e.target.checked })
                  }
                  className="w-5 h-5"
                />
                <label className="text-[var(--type-sm)] text-[var(--c-text-muted)]">
                  Published
                </label>
              </div>
            </div>

            {/* Form Actions */}
            <div className="flex gap-3 mt-[var(--phi-5)]">
              <button
                onClick={handleSave}
                className="s-btn-actuator s-glow-amber px-[var(--phi-6)] py-[var(--phi-3)]"
              >
                {editingSlug ? "Update Plugin" : "Create Plugin"}
              </button>
              <button
                onClick={resetForm}
                className="s-btn-ghost px-[var(--phi-6)] py-[var(--phi-3)]"
              >
                Cancel
              </button>
            </div>
          </div>
        )}

        {/* Add Button */}
        {!showForm && (
          <button
            onClick={startCreate}
            className="s-btn-actuator s-glow-amber px-[var(--phi-6)] py-[var(--phi-3)] mb-[var(--phi-5)]"
          >
            + Add New Plugin
          </button>
        )}

        {/* Plugins Table */}
        <div className="s-card-glass rounded-[var(--r-lg)] overflow-hidden">
          <table className="w-full text-[var(--type-sm)]">
            <thead className="border-b border-[var(--c-border)]">
              <tr>
                <th className="px-4 py-3 text-left font-light text-[var(--c-text-muted)] uppercase tracking-wider">
                  Name
                </th>
                <th className="px-4 py-3 text-left font-light text-[var(--c-text-muted)] uppercase tracking-wider">
                  Type
                </th>
                <th className="px-4 py-3 text-left font-light text-[var(--c-text-muted)] uppercase tracking-wider">
                  Price
                </th>
                <th className="px-4 py-3 text-center font-light text-[var(--c-text-muted)] uppercase tracking-wider">
                  Published
                </th>
                <th className="px-4 py-3 text-right font-light text-[var(--c-text-muted)] uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {plugins.map((plugin) => (
                <tr
                  key={plugin.slug}
                  className="border-b border-[var(--c-border)] last:border-0 hover:bg-[var(--c-surface-2)] transition-colors"
                >
                  <td className="px-4 py-3 text-[var(--c-text-primary)]">
                    {plugin.name}
                  </td>
                  <td className="px-4 py-3 text-[var(--c-text-muted)]">
                    {plugin.type}
                  </td>
                  <td className="px-4 py-3 text-[var(--c-lcd-amber)]">
                    ${plugin.price}
                  </td>
                  <td className="px-4 py-3 text-center">
                    <span
                      className={`text-[var(--type-2xs)] font-light uppercase ${
                        plugin.published
                          ? "text-green-400"
                          : "text-[var(--c-text-muted)]"
                      }`}
                    >
                      {plugin.published ? "✓" : "○"}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-right">
                    <div className="flex gap-2 justify-end">
                      <button
                        onClick={() => startEdit(plugin)}
                        className="text-[var(--c-lcd-amber)] hover:drop-shadow-[0_0_10px_rgba(255,176,0,0.5)] transition-all"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => setDeleteConfirm(plugin.slug)}
                        className="text-red-400 hover:drop-shadow-[0_0_10px_rgba(255,0,0,0.5)] transition-all"
                      >
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Delete Confirmation Modal */}
        {deleteConfirm && (
          <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50">
            <div className="s-card-glass p-[var(--phi-5)] rounded-[var(--r-lg)] max-w-sm">
              <h3 className="text-[var(--type-lg)] font-light text-[var(--c-text-primary)] mb-3">
                Delete Plugin?
              </h3>
              <p className="text-[var(--c-text-muted)] mb-[var(--phi-5)]">
                Are you sure you want to delete this plugin? This action cannot
                be undone.
              </p>
              <div className="flex gap-3">
                <button
                  onClick={() => handleDelete(deleteConfirm)}
                  className="s-btn-actuator s-glow-amber px-[var(--phi-6)] py-[var(--phi-3)] flex-1"
                >
                  Delete
                </button>
                <button
                  onClick={() => setDeleteConfirm(null)}
                  className="s-btn-ghost px-[var(--phi-6)] py-[var(--phi-3)] flex-1"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
