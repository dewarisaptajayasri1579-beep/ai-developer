"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import { Download, X } from "lucide-react";

export default function ImagePreview({ src, alt }: { src: string; alt: string }) {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="mt-3 block w-fit overflow-hidden rounded-lg border border-neon/20"
      >
        <Image
          src={src}
          alt={alt}
          width={480}
          height={360}
          className="h-auto max-h-72 w-auto object-contain"
        />
      </button>

      {open &&
        mounted &&
        createPortal(
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-4"
            onClick={() => setOpen(false)}
          >
            <div className="absolute top-4 right-4 flex items-center gap-4">
              <a
                href={src}
                download
                onClick={(e) => e.stopPropagation()}
                aria-label="Download gambar"
                className="text-white/80 hover:text-white transition-colors"
              >
                <Download size={26} />
              </a>
              <button
                onClick={() => setOpen(false)}
                aria-label="Tutup preview"
                className="text-white/80 hover:text-white transition-colors"
              >
                <X size={28} />
              </button>
            </div>
            <Image
              src={src}
              alt={alt}
              width={1600}
              height={1200}
              className="max-h-[90vh] max-w-[90vw] w-auto h-auto object-contain rounded-lg"
              onClick={(e) => e.stopPropagation()}
            />
          </div>,
          document.body
        )}
    </>
  );
}
