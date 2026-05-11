/**
 * doc_draft_storage.js
 * Shared storage & demo data untuk DO Draft DOC.
 */

const DOC_DRAFT_KEY = "IBOCS_doc_drafts_v4";

/* ─── Demo Data ─────────────────────────────────────────────── */
const DOC_DRAFT_DEMO = [
    {
        // Internal · Draft
        id: "DOD-001",
        date: "2026-04-18", postingDate: "2026-04-18", deliveryDate: "2026-04-20",
        docType: "internal",
        planCode: "100001111", planName: "TOP-BROILER COBB PERIODE-01",
        customer: "CUST-001", customerName: "PT TOP Distribusi",
        contactPerson: "", customerRefNo: "",
        whsePengirim: "WH-KDG01", whsePengirimName: "Gudang Kandang 01",
        externalVendor: null, externalVendorName: null,
        noSuratJalan: null, tglSuratJalan: null, noPol: null,
        lines: [{
            id: "L1",
            brand: "BRD-001", brandName: "Cobb 500",
            itemBefore: "DOC Broiler Cobb 500 (M)", uomBefore: "Ekor",
            qtyBefore: 10000, priceBefore: null, priceJual: null,
            afterItems: [
                { id: "A1", itemAfter: "DOC Broiler Cobb 500 (M)", uomAfter: "Ekor", qtyAfter: 10000, whseTujuan: "WH-KDG01" }
            ]
        }],
        status: "Draft", statusPO: null, doNumber: null,
        createdBy: "admin_hatchery", createdAt: "2026-04-18"
    },
    {
        // External · DO & GRPO Generated
        id: "DOD-002",
        date: "2026-04-19", postingDate: "2026-04-19", deliveryDate: "2026-04-21",
        docType: "external",
        planCode: "100001112", planName: "TOP-BROILER ROSS PERIODE-02",
        customer: "CUST-001", customerName: "PT TOP Distribusi",
        contactPerson: "", customerRefNo: "REF-2026-042",
        whsePengirim: "WH-KDG02", whsePengirimName: "Gudang Kandang 02",
        externalVendor: "EV-001", externalVendorName: "PT Sumber Bibit Nusantara",
        noSuratJalan: "SJ/2026/0042", tglSuratJalan: "2026-04-19", noPol: "BK 1234 AB",
        lines: [{
            id: "L1",
            brand: "BRD-002", brandName: "Ross 308",
            itemBefore: "DOC Broiler Ross 308 (M)", uomBefore: "Ekor",
            qtyBefore: 5000, priceBefore: 8000, priceJual: 9500,
            afterItems: [
                { id: "A1", itemAfter: "DOC Broiler Ross 308 (M)", uomAfter: "Ekor", qtyAfter: 5000, whseTujuan: "WH-KDG02" }
            ]
        }],
        status: "DO & GRPO Generated", statusPO: null, doNumber: "DO-001", grpoNumber: "GRPO-001",
        createdBy: "admin_hatchery", createdAt: "2026-04-19"
    },
    {
        // Internal · DO Generated
        id: "DOD-004",
        date: "2026-04-20", postingDate: "2026-04-20", deliveryDate: "2026-04-22",
        docType: "internal",
        planCode: "100001111", planName: "TOP-BROILER COBB PERIODE-01",
        customer: "CUST-001", customerName: "PT TOP Distribusi",
        contactPerson: "", customerRefNo: "",
        whsePengirim: "WH-KDG01", whsePengirimName: "Gudang Kandang 01",
        externalVendor: null, externalVendorName: null,
        noSuratJalan: null, tglSuratJalan: null, noPol: null,
        lines: [{
            id: "L1",
            brand: "BRD-004", brandName: "Hubbard",
            itemBefore: "DOC Hubbard (M)", uomBefore: "Ekor",
            qtyBefore: 10000, priceBefore: null, priceJual: 9500,
            afterItems: [
                { id: "A1", itemAfter: "DOC Hubbard (M)", uomAfter: "Ekor", qtyAfter: 10000, whseTujuan: "WH-KDG01" }
            ]
        }],
        status: "DO Generated", statusPO: null, doNumber: "DO-002", grpoNumber: null,
        createdBy: "admin_hatchery", createdAt: "2026-04-20"
    },
    {
        // Internal · DO Generated · 2 conversion items
        id: "DOD-005",
        date: "2026-04-21", postingDate: "2026-04-21", deliveryDate: "2026-04-23",
        docType: "internal",
        planCode: "100001131", planName: "BMAX-BROILER HUBBARD BATCH-01",
        customer: "CUST-003", customerName: "PT BMAX",
        contactPerson: "", customerRefNo: "",
        whsePengirim: "WH-KDG02", whsePengirimName: "Gudang Kandang 02",
        externalVendor: null, externalVendorName: null,
        noSuratJalan: null, tglSuratJalan: null, noPol: null,
        lines: [{
            id: "L1",
            brand: "BRD-003", brandName: "Lohmann",
            itemBefore: "DOC Layer Lohmann (F)", uomBefore: "Ekor",
            qtyBefore: 10000, priceBefore: null, priceJual: 12000,
            afterItems: [
                { id: "A1", itemAfter: "DOC Layer Lohmann (F)", uomAfter: "Ekor", qtyAfter: 6000, whseTujuan: "WH-KDG02" },
                { id: "A2", itemAfter: "DOC Layer Lohmann (M)", uomAfter: "Ekor", qtyAfter: 4000, whseTujuan: "WH-KDG02" }
            ]
        }],
        status: "DO Generated", statusPO: null, doNumber: "DO-003", grpoNumber: null,
        createdBy: "admin_hatchery", createdAt: "2026-04-21"
    },
    {
        // Internal · Draft
        id: "DOD-003",
        date: "2026-04-20", postingDate: "2026-04-20", deliveryDate: "2026-04-22",
        docType: "internal",
        planCode: "100001119", planName: "AYM-BROILER COBB BATCH-03",
        customer: "CUST-002", customerName: "PT AYM (Ayam Yummy Makmur)",
        contactPerson: "", customerRefNo: "",
        whsePengirim: "WH-KDG03", whsePengirimName: "Gudang Kandang 03",
        externalVendor: null, externalVendorName: null,
        noSuratJalan: null, tglSuratJalan: null, noPol: null,
        lines: [{
            id: "L1",
            brand: "BRD-001", brandName: "Cobb 500",
            itemBefore: "DOC Broiler Cobb 500 (M)", uomBefore: "Ekor",
            qtyBefore: 4000, priceBefore: null, priceJual: null,
            afterItems: [
                { id: "A1", itemAfter: "DOC Broiler Cobb 500 (M)", uomAfter: "Ekor", qtyAfter: 4000, whseTujuan: "WH-KDG03" }
            ]
        }],
        status: "Draft", statusPO: null, doNumber: null,
        createdBy: "admin_hatchery", createdAt: "2026-04-20"
    },
    {
        // Internal · DO Generated + PO Generated
        id: "DOD-006",
        date: "2026-04-22", postingDate: "2026-04-22", deliveryDate: "2026-04-24",
        docType: "internal",
        planCode: "100001120", planName: "AYM-LAYER LOHMANN BATCH-01",
        customer: "CUST-002", customerName: "PT AYM (Ayam Yummy Makmur)",
        contactPerson: "", customerRefNo: "REF-AYM-019",
        whsePengirim: "WH-KDG03", whsePengirimName: "Gudang Kandang 03",
        externalVendor: null, externalVendorName: null,
        noSuratJalan: null, tglSuratJalan: null, noPol: null,
        lines: [{
            id: "L1",
            brand: "BRD-003", brandName: "Lohmann",
            itemBefore: "DOC Layer Lohmann (F)", uomBefore: "Ekor",
            qtyBefore: 8000, priceBefore: null, priceJual: 11500,
            afterItems: [
                { id: "A1", itemAfter: "DOC Layer Lohmann (F)", uomAfter: "Ekor", qtyAfter: 8000, whseTujuan: "WH-KDG03" }
            ]
        }],
        status: "DO Generated", statusPO: "PO Generated", doNumber: "DO-004", grpoNumber: null, poGenId: "PO-GEN-001",
        createdBy: "admin_hatchery", createdAt: "2026-04-22"
    },
    {
        // External · Draft · 2 conversion items
        id: "DOD-007",
        date: "2026-04-23", postingDate: "2026-04-23", deliveryDate: "2026-04-25",
        docType: "external",
        planCode: "100001119", planName: "AYM-BROILER COBB BATCH-03",
        customer: "CUST-002", customerName: "PT AYM (Ayam Yummy Makmur)",
        contactPerson: "", customerRefNo: "",
        whsePengirim: "WH-KDG03", whsePengirimName: "Gudang Kandang 03",
        externalVendor: "EV-002", externalVendorName: "CV Hatchery Mandiri",
        noSuratJalan: "SJ/2026/0055", tglSuratJalan: "2026-04-23", noPol: "BK 5678 CD",
        lines: [{
            id: "L1",
            brand: "BRD-002", brandName: "Ross 308",
            itemBefore: "DOC Broiler Ross 308 (M)", uomBefore: "Ekor",
            qtyBefore: 5000, priceBefore: null, priceJual: null,
            afterItems: [
                { id: "A1", itemAfter: "DOC Broiler Ross 308 (M)", uomAfter: "Ekor", qtyAfter: 3000, whseTujuan: "WH-KDG03" },
                { id: "A2", itemAfter: "DOC Broiler Ross 308 (F)", uomAfter: "Ekor", qtyAfter: 2000, whseTujuan: "WH-KDG03" }
            ]
        }],
        status: "Draft", statusPO: null, doNumber: null,
        createdBy: "admin_hatchery", createdAt: "2026-04-23"
    }
];

/* ─── Forecast reference list ────────────────────────────────── */
const DOC_FORECAST_REFS = [
    {
        id: "FC-001", desc: "Broiler Cycle 18",
        customer: "CUST-001", customerName: "PT TOP Distribusi",
        suggestedLines: [
            { brand: "BRD-001", brandName: "Cobb 500", itemBefore: "DOC Broiler Cobb 500", uomBefore: "Ekor", qtyBefore: 10000 }
        ]
    },
    {
        id: "FC-002", desc: "Broiler Cycle 18",
        customer: "CUST-001", customerName: "PT TOP Distribusi",
        suggestedLines: [
            { brand: "BRD-002", brandName: "Ross 308", itemBefore: "DOC Broiler Ross 308", uomBefore: "Ekor", qtyBefore: 5000 }
        ]
    },
    {
        id: "FC-003", desc: "Broiler Cycle 21",
        customer: "CUST-002", customerName: "PT AYM (Ayam Yummy Makmur)",
        suggestedLines: [
            { brand: "BRD-001", brandName: "Cobb 500", itemBefore: "DOC Broiler Cobb 500", uomBefore: "Ekor", qtyBefore: 8000 }
        ]
    },
    {
        id: "FC-004", desc: "Broiler Cycle 19",
        customer: "CUST-001", customerName: "PT TOP Distribusi",
        suggestedLines: [
            { brand: "BRD-004", brandName: "Hubbard", itemBefore: "DOC Broiler Hubbard", uomBefore: "Ekor", qtyBefore: 10000 }
        ]
    },
    {
        id: "FC-005", desc: "Broiler Cycle 22",
        customer: "CUST-002", customerName: "PT AYM (Ayam Yummy Makmur)",
        suggestedLines: [
            { brand: "BRD-002", brandName: "Ross 308", itemBefore: "DOC Broiler Ross 308", uomBefore: "Ekor", qtyBefore: 5000 }
        ]
    },
    {
        id: "FC-006", desc: "Layer Cycle 1",
        customer: "CUST-003", customerName: "PT BMAX",
        suggestedLines: [
            { brand: "BRD-003", brandName: "Lohmann", itemBefore: "DOC Layer Lohmann", uomBefore: "Ekor", qtyBefore: 10000 }
        ]
    }
];

/* ─── Storage Functions ─────────────────────────────────────── */
function docDraftMigrate(drafts) {
    return drafts.map(d => {
        // Rename "Confirmed" → "Open"
        if (d.status === "Confirmed") d.status = "Open";
        // Split old "PO Generated" into statusDO + statusPO
        if (d.status === "PO Generated") {
            if (d.doNumber) d.status = d.grpoNumber ? "DO & GRPO Generated" : "DO Generated";
            else d.status = "Draft";
            d.statusPO = "PO Generated";
        }
        if (d.statusPO === undefined) d.statusPO = null;
        if (d.status === "DO Generated" && !d.doNumber) d.status = "Draft";
        if (d.status === "DO & GRPO Generated" && !d.doNumber) d.status = "Draft";
        if (!d.doNumber || d.status === "Draft") {
            d.statusPO = null;
            d.poGenId = null;
        }
        if (d.customerPhone === undefined) d.customerPhone = "";
        if (d.shipTo === undefined) d.shipTo = "";
        if (d.vendorPhone === undefined) d.vendorPhone = null;
        if (d.remarks === undefined) d.remarks = "";
        if (d.farmItems === undefined) d.farmItems = [];
        if (d.transport === undefined) {
            d.transport = {
                vendorCode: "",
                vendorName: "",
                driverName: "",
                noListTransport: "",
                billOfLading: "",
                licenseNumber: "",
                containerNumber: "",
                fromArea: "",
                toArea: "",
                departureTime: "",
                arrivalTime: "",
                minimumFee: "",
                servicePriceKg: "",
                totalService: "",
                remarks: "",
                isBilled: false,
                ta: "",
                totalServiceInv: "",
                noInvoiceOa: ""
            };
        } else {
            if (d.transport.departureTime === undefined) d.transport.departureTime = "";
            if (d.transport.arrivalTime === undefined) d.transport.arrivalTime = "";
            if (d.transport.remarks === undefined) d.transport.remarks = "";
            if (d.transport.isBilled === undefined) d.transport.isBilled = false;
            if (d.transport.ta === undefined) d.transport.ta = "";
            if (d.transport.totalServiceInv === undefined) d.transport.totalServiceInv = "";
            if (d.transport.noInvoiceOa === undefined) d.transport.noInvoiceOa = "";
        }
        return d;
    });
}

function docDraftLoadAll() {
    try {
        const raw = localStorage.getItem(DOC_DRAFT_KEY);
        if (raw) return docDraftMigrate(JSON.parse(raw));
    } catch(e) {}
    localStorage.setItem(DOC_DRAFT_KEY, JSON.stringify(DOC_DRAFT_DEMO));
    return DOC_DRAFT_DEMO.map(d => ({ ...d }));
}

function docDraftSaveAll(drafts) {
    localStorage.setItem(DOC_DRAFT_KEY, JSON.stringify(drafts));
}

function docDraftGet(id) {
    return docDraftLoadAll().find(d => d.id === id) || null;
}

function docDraftSave(draft) {
    const drafts = docDraftLoadAll();
    const idx = drafts.findIndex(d => d.id === draft.id);
    if (idx >= 0) drafts[idx] = draft;
    else drafts.unshift(draft);
    docDraftSaveAll(drafts);
}

function docDraftNextId() {
    const drafts = docDraftLoadAll();
    const nums = drafts.map(d => parseInt(d.id.replace("DOD-", ""), 10)).filter(n => !isNaN(n));
    const next = nums.length ? Math.max(...nums) + 1 : 1;
    return "DOD-" + String(next).padStart(3, "0");
}

function docDraftNextDoNumber() {
    const drafts = docDraftLoadAll();
    const nums = drafts
        .filter(d => d.doNumber)
        .map(d => parseInt(d.doNumber.replace("DO-", ""), 10))
        .filter(n => !isNaN(n));
    const next = nums.length ? Math.max(...nums) + 1 : 1;
    return "DO-" + String(next).padStart(3, "0");
}

function docDraftNextGrpoNumber() {
    const drafts = docDraftLoadAll();
    const nums = drafts
        .filter(d => d.grpoNumber)
        .map(d => parseInt(d.grpoNumber.replace("GRPO-", ""), 10))
        .filter(n => !isNaN(n));
    const next = nums.length ? Math.max(...nums) + 1 : 1;
    return "GRPO-" + String(next).padStart(3, "0");
}

function uniqueId() {
    return Math.random().toString(36).slice(2, 9);
}

console.log("[IBOCS] doc_draft_storage.js loaded");
