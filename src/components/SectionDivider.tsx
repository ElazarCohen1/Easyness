export default function SectionDivider() {
  return (
    <div className="relative mx-auto flex max-w-4xl items-center justify-center px-6 py-4">
      <span className="h-px flex-1 bg-linear-to-r from-transparent via-[#a98c58]/40 to-[#a98c58]/40" />
      <span className="mx-5 h-2 w-2 rotate-45 border border-[#a98c58]/60 bg-[#a98c58]/15" />
      <span className="h-px flex-1 bg-linear-to-l from-transparent via-[#a98c58]/40 to-[#a98c58]/40" />
    </div>
  );
}