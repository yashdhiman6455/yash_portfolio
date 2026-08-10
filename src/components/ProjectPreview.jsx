import {
  AlignLeft,
  Check,
  ChevronDown,
  GripVertical,
  List,
  Mail,
  Plus,
  Search,
  ShoppingCart,
  Sparkles,
  TextCursorInput,
  User,
} from 'lucide-react'

function BrowserFrame({ url, children }) {
  return (
    <div className="overflow-hidden rounded-xl border border-line bg-surface-2/70">
      <div className="flex items-center gap-1.5 border-b border-line px-3 py-2.5">
        <span className="h-2.5 w-2.5 rounded-full bg-red-400/60" aria-hidden="true" />
        <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/60" aria-hidden="true" />
        <span className="h-2.5 w-2.5 rounded-full bg-green-400/60" aria-hidden="true" />
        <div className="ml-2 flex-1 truncate rounded-md bg-background/60 px-3 py-1 font-mono text-[10px] text-faint">
          {url}
        </div>
      </div>
      <div className="p-4">{children}</div>
    </div>
  )
}

function FieldShell({ icon, label, input = true }) {
  return (
    <div className="rounded-lg border border-line bg-surface p-2.5">
      <div className="flex items-center justify-between">
        <span className="flex items-center gap-1.5 text-[10px] font-medium text-faint">
          {icon}
          {label}
        </span>
        <GripVertical size={12} className="text-faint/60" />
      </div>
      {input && (
        <div className="mt-2 h-5 rounded border border-line bg-background/50 px-2" />
      )}
    </div>
  )
}

function FormBuilderPreview() {
  return (
    <BrowserFrame url="formgenius.ai/forms/lead-capture">
      <div className="grid grid-cols-[92px_1fr] gap-3">
        <div className="hidden space-y-1.5 sm:block">
          <div className="flex items-center gap-1.5 rounded-md bg-accent/10 px-2 py-1.5 text-[10px] font-medium text-accent">
            <TextCursorInput size={11} />
            Inputs
          </div>
          <div className="flex items-center gap-1.5 rounded-md px-2 py-1.5 text-[10px] text-faint">
            <List size={11} />
            Selects
          </div>
          <div className="flex items-center gap-1.5 rounded-md px-2 py-1.5 text-[10px] text-faint">
            <AlignLeft size={11} />
            Textarea
          </div>
        </div>

        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <span className="font-display text-[12px] font-semibold text-text">Lead Capture</span>
            <span className="inline-flex items-center gap-1.5 rounded-md bg-gradient-to-r from-indigo-600 to-violet-600 px-2.5 py-1.5 text-[10px] font-medium text-white">
              <Sparkles size={11} />
              Generate with AI
            </span>
          </div>

          <div className="space-y-1.5 rounded-lg border border-dashed border-line-strong p-2">
            <FieldShell icon={<User size={11} />} label="Full Name" />
            <FieldShell icon={<Mail size={11} />} label="Email Address" />
            <div className="rounded-lg border border-line bg-surface p-2.5">
              <div className="flex items-center justify-between">
                <span className="flex items-center gap-1.5 text-[10px] font-medium text-faint">
                  <List size={11} />
                  How did you find us?
                </span>
                <GripVertical size={12} className="text-faint/60" />
              </div>
              <div className="mt-2 flex h-5 items-center justify-between rounded border border-line bg-background/50 px-2 text-[9px] text-faint">
                Select an option <ChevronDown size={10} />
              </div>
            </div>
            <FieldShell icon={<AlignLeft size={11} />} label="Comments" />
          </div>

          <div className="flex items-center justify-between">
            <span className="flex items-center gap-1.5 text-[10px] text-faint">
              <span className="grid h-3.5 w-3.5 place-items-center rounded-sm border border-accent/50 bg-accent/20">
                <Check size={9} className="text-accent" />
              </span>
              Required fields marked
            </span>
            <span className="grid h-6 w-6 place-items-center rounded-full bg-accent/15 text-accent">
              <Plus size={12} />
            </span>
          </div>
        </div>
      </div>
    </BrowserFrame>
  )
}

function StorefrontPreview() {
  return (
    <BrowserFrame url="shopsphere.dev/store">
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <span className="flex items-center gap-1.5">
            <span className="grid h-4 w-4 place-items-center rounded bg-gradient-to-br from-indigo-500 to-violet-600 text-[8px] font-bold text-white">
              S
            </span>
            <span className="text-[11px] font-semibold text-text">ShopSphere</span>
          </span>
          <div className="flex items-center gap-2">
            <div className="hidden w-28 items-center gap-1.5 rounded-md border border-line bg-background/50 px-2 py-1 text-[9px] text-faint sm:flex">
              <Search size={9} />
              Search products…
            </div>
            <span className="relative grid h-5 w-5 place-items-center rounded-md border border-line text-faint">
              <ShoppingCart size={10} />
              <span className="absolute -right-1 -top-1 grid h-3 w-3 place-items-center rounded-full bg-violet-500 text-[7px] font-bold text-white">
                2
              </span>
            </span>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-2">
          {[
            ['from-indigo-400/40', 'Wireless Headphones', '$89'],
            ['from-violet-400/40', 'Mechanical Keyboard', '$129'],
            ['from-fuchsia-400/40', 'Ergo Mouse', '$49'],
          ].map(([gradient, name, price]) => (
            <div key={name} className="rounded-lg border border-line bg-surface p-2">
              <div
                className={`h-12 rounded-md bg-gradient-to-br ${gradient} to-transparent`}
                aria-hidden="true"
              />
              <div className="mt-1.5 truncate text-[9px] font-medium text-text">{name}</div>
              <div className="mt-0.5 flex items-center justify-between">
                <span className="text-[9px] font-semibold text-accent">{price}</span>
                <span className="text-[8px] text-faint">In stock</span>
              </div>
            </div>
          ))}
        </div>

        <div className="flex items-center justify-center rounded-md border border-accent/25 bg-accent/10 py-1.5 text-[9px] font-medium text-accent">
          Checkout with Stripe →
        </div>
      </div>
    </BrowserFrame>
  )
}

function ApiPreview() {
  return (
    <div className="overflow-hidden rounded-xl border border-line bg-[#0b0c10]">
      <div className="flex items-center gap-1.5 border-b border-white/10 px-3 py-2.5">
        <span className="h-2.5 w-2.5 rounded-full bg-red-400/60" aria-hidden="true" />
        <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/60" aria-hidden="true" />
        <span className="h-2.5 w-2.5 rounded-full bg-green-400/60" aria-hidden="true" />
        <div className="ml-2 flex-1 truncate rounded-md bg-white/5 px-3 py-1 font-mono text-[10px] text-zinc-500">
          api.shopsphere.dev /api/products
        </div>
      </div>
      <div className="space-y-1.5 p-4 font-mono text-[10px] leading-relaxed">
        <p className="text-zinc-500">$ curl -H "Authorization: Bearer &lt;token&gt;" \</p>
        <p className="pl-3 text-zinc-500">https://api.shopsphere.dev/api/products?page=1</p>
        <p className="text-zinc-600">▼ HTTP 200 OK</p>
        <p className="text-emerald-400/80">
          {"{ "}
          <span className="text-zinc-400">"products": [</span>
        </p>
        <p className="pl-4 text-zinc-400">
          {"  "}
          {"{ "}
          <span className="text-sky-300/80">"_id"</span>, <span className="text-sky-300/80">"name"</span>,{" "}
          <span className="text-sky-300/80">"price"</span>, <span className="text-sky-300/80">"stock"</span>{" "}
          {"}"},
        </p>
        <p className="pl-4 text-zinc-400">{"  // … page 1 of 24"}</p>
        <p className="text-zinc-400">{"  ] "}</p>
        <p className="text-emerald-400/80">
          {"  "}
          <span className="text-zinc-400">"pagination":</span> {"{ "}
          <span className="text-sky-300/80">"page"</span>: 1, <span className="text-sky-300/80">"total"</span>: 234{" "}
          {"}"}
        </p>
        <p className="text-emerald-400/80">{"}"}</p>
      </div>
    </div>
  )
}

function ScreenshotCollage({ images }) {
  const [first, ...rest] = images
  return (
    <div className="overflow-hidden rounded-xl border border-line bg-surface-2/70">
      <img
        src={first}
        alt=""
        width={960}
        height={640}
        loading="lazy"
        className="h-auto w-full object-cover"
      />
      {rest.length > 0 && (
        <div className={`grid gap-3 p-3 ${rest.length === 1 ? 'grid-cols-1' : 'grid-cols-2'}`}>
          {rest.map((src) => (
            <img
              key={src}
              src={src}
              alt=""
              width={480}
              height={320}
              loading="lazy"
              className="h-auto w-full rounded-lg object-cover"
            />
          ))}
        </div>
      )}
    </div>
  )
}

export default function ProjectPreview({ variant, screenshots }) {
  if (screenshots && screenshots.length > 0) return <ScreenshotCollage images={screenshots} />
  if (variant === 'form-builder') return <FormBuilderPreview />
  if (variant === 'storefront') return <StorefrontPreview />
  if (variant === 'api') return <ApiPreview />
  return null
}
