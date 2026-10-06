export type InvoiceStatus = 'paid' | 'sent' | 'overdue' | 'draft'

export type Invoice = {
  id?: string
  client?: string
  number?: string
  title?: string
  amount?: number
  status?: InvoiceStatus
  daysAgo?: number
}

export const invoices: Invoice[] = [
  { id: '1', client: 'Northwind Studio', number: 'INV-1042', title: 'Brand site, March', amount: 2480, status: 'paid', daysAgo: 1 },
  { id: '2', client: 'Ada & Co', number: 'INV-1041', title: 'Retainer', amount: 1800, status: 'sent', daysAgo: 1 },
  { id: '3', client: 'Harbor Goods', number: 'INV-1040', title: 'Packaging refresh', amount: 960, status: 'paid', daysAgo: 2 },
  { id: '4', client: 'Lumen Health', number: 'INV-1039', title: 'Landing page', amount: 3200, status: 'overdue', daysAgo: 4 },
  { id: '5', client: 'Fieldnote', number: 'INV-1038', title: 'Workshop', amount: 640, status: 'draft', daysAgo: 5 },
  { id: '6', client: 'Sable Coffee', number: 'INV-1037', title: 'Menu reprint', amount: 420, status: 'paid', daysAgo: 6 },
  { id: '7', client: 'Kinship', number: 'INV-1036', title: 'Monthly design', amount: 1500, status: 'sent', daysAgo: 8 },
  { id: '8', client: 'Orchard Press', number: 'INV-1035', title: 'Catalog', amount: 2100, status: 'paid', daysAgo: 9 },
  { id: '9', client: 'Brightline', number: 'INV-1034', title: 'Pitch deck', amount: 780, status: 'overdue', daysAgo: 12 },
  { id: '10', client: 'Moss & Pine', number: 'INV-1033', title: 'Identity', amount: 4500, status: 'paid', daysAgo: 14 },
  { id: '11', client: 'Relay', number: 'INV-1032', title: 'App screens', amount: 1900, status: 'sent', daysAgo: 18 },
  { id: '12', client: 'Paper Plane', number: 'INV-1031', title: 'Print run', amount: 560, status: 'draft', daysAgo: 21 },
  { id: '13', client: 'Cedar Row', number: 'INV-1030', title: 'Site care', amount: 300, status: 'paid', daysAgo: 24 },
  { id: '14', client: 'Vela', number: 'INV-1029', title: 'Campaign', amount: 2750, status: 'overdue', daysAgo: 28 },
]

export const statusLabel: Record<InvoiceStatus, string> = {
  paid: 'Paid',
  sent: 'Sent',
  overdue: 'Overdue',
  draft: 'Draft',
}

export const formatAmount = (value?: number) =>
  new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(value ?? 0)

export const formatAge = (daysAgo?: number) => {
  if (!daysAgo) return 'Today'
  if (daysAgo === 1) return '1d ago'
  return `${daysAgo}d ago`
}
