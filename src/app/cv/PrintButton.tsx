"use client";

export default function PrintButton() {
  return (
    <button
      onClick={() => window.print()}
      className="print:hidden mb-10 inline-flex items-center gap-2 bg-accent text-background px-5 py-2.5 text-sm font-medium hover:opacity-90 transition-opacity"
    >
      Imprimer / Enregistrer en PDF
    </button>
  );
}
