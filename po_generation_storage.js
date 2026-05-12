/**
 * po_generation_storage.js
 * Storage untuk PO Generation — PO yang di-generate dari DO Draft.
 */

const PO_GEN_KEY = "IBOCS_po_generation";

/* ─── Demo Data ─────────────────────────────────────────────── */
const PO_GEN_DEMO = [
    {
        id: "PO-DOC-2604-001",
        doDraftId: "DOD-002",
        date: "2026-04-21",
        postingDate: "2026-04-21",
        deliveryDate: "2026-04-21",
        vendorCode: "VND-CTU",
        vendorName: "CTU",
        customerCode: "CUST-001",
        customerName: "PT TOP Distribusi",
        docType: "external",
        planCode: "100001112",
        planName: "TOP-BROILER ROSS PERIODE-02",
        status: "Open",
        grpoNo: "",
        grpoDate: "",
        apNo: "",
        apDate: "",
        remarks: "PO DOC trading untuk TOP.",
        lines: [{
            id: "L1",
            itemBefore: "DOC Broiler Ross 308 (M)",
            uomBefore: "Ekor",
            priceBefore: 8000,
            afterItems: [{ id: "A1", itemAfter: "DOC Broiler Ross 308 (M)", uomAfter: "Ekor", qtyAfter: 5000, whseTujuan: "WH-KDG02" }]
        }],
        createdBy: "admin_top",
        createdAt: "2026-04-21"
    },
    {
        id: "PO-DOC-2604-002",
        doDraftId: "DOD-004",
        date: "2026-04-22",
        postingDate: "2026-04-22",
        deliveryDate: "2026-04-22",
        vendorCode: "VND-CTU",
        vendorName: "CTU",
        customerCode: "CUST-001",
        customerName: "PT TOP Distribusi",
        docType: "internal",
        planCode: "100001111",
        planName: "TOP-BROILER COBB PERIODE-01",
        status: "Closed",
        grpoNo: "GRPO-DOC-TOP-001",
        grpoDate: "2026-04-23",
        apNo: "AP-DOC-TOP-001",
        apDate: "2026-04-24",
        remarks: "PO DOC TOP sudah lengkap sampai AP.",
        lines: [{
            id: "L1",
            itemBefore: "DOC Hubbard (M)",
            uomBefore: "Ekor",
            priceBefore: 9000,
            afterItems: [{ id: "A1", itemAfter: "DOC Hubbard (M)", uomAfter: "Ekor", qtyAfter: 10000, whseTujuan: "WH-KDG01" }]
        }],
        createdBy: "admin_top",
        createdAt: "2026-04-22"
    },
    {
        id: "PO-DOC-2604-003",
        doDraftId: "DOD-005",
        date: "2026-04-23",
        postingDate: "2026-04-23",
        deliveryDate: "2026-04-23",
        vendorCode: "VND-CTU",
        vendorName: "CTU",
        customerCode: "CUST-003",
        customerName: "PT BMAX",
        docType: "internal",
        planCode: "100001131",
        planName: "BMAX-BROILER HUBBARD BATCH-01",
        status: "Open",
        grpoNo: "",
        grpoDate: "",
        apNo: "",
        apDate: "",
        remarks: "PO DOC BMAX menunggu GRPO.",
        lines: [{
            id: "L1",
            itemBefore: "DOC Layer Lohmann (F)",
            uomBefore: "Ekor",
            priceBefore: 12000,
            afterItems: [
                { id: "A1", itemAfter: "DOC Layer Lohmann (F)", uomAfter: "Ekor", qtyAfter: 6000, whseTujuan: "WH-KDG02" },
                { id: "A2", itemAfter: "DOC Layer Lohmann (M)", uomAfter: "Ekor", qtyAfter: 4000, whseTujuan: "WH-KDG02" }
            ]
        }],
        createdBy: "admin_top",
        createdAt: "2026-04-23"
    },
    {
        id: "PO-DOC-2604-004",
        doDraftId: "DOD-006",
        date: "2026-04-24",
        postingDate: "2026-04-24",
        deliveryDate: "2026-04-24",
        vendorCode: "VND-CTU",
        vendorName: "CTU",
        customerCode: "CUST-002",
        customerName: "PT AYM (Ayam Yummy Makmur)",
        docType: "internal",
        planCode: "100001120",
        planName: "AYM-LAYER LOHMANN BATCH-01",
        status: "Closed",
        grpoNo: "GRPO-DOC-AYM-001",
        grpoDate: "2026-04-25",
        apNo: "AP-DOC-AYM-001",
        apDate: "2026-04-26",
        remarks: "PO DOC AYM sudah closed.",
        lines: [{
            id: "L1",
            itemBefore: "DOC Layer Lohmann (F)",
            uomBefore: "Ekor",
            priceBefore: 11000,
            afterItems: [{ id: "A1", itemAfter: "DOC Layer Lohmann (F)", uomAfter: "Ekor", qtyAfter: 8000, whseTujuan: "WH-KDG03" }]
        }],
        createdBy: "admin_top",
        createdAt: "2026-04-24"
    },
    {
        id: "PO-DOC-2604-005",
        doDraftId: "DOD-007",
        date: "2026-04-25",
        postingDate: "2026-04-25",
        deliveryDate: "2026-04-25",
        vendorCode: "VND-CTU",
        vendorName: "CTU",
        customerCode: "CUST-002",
        customerName: "PT AYM (Ayam Yummy Makmur)",
        docType: "external",
        planCode: "100001119",
        planName: "AYM-BROILER COBB BATCH-03",
        status: "Open",
        grpoNo: "",
        grpoDate: "",
        apNo: "",
        apDate: "",
        remarks: "PO DOC trading AYM.",
        lines: [{
            id: "L1",
            itemBefore: "DOC Broiler Ross 308 (M)",
            uomBefore: "Ekor",
            priceBefore: 8000,
            afterItems: [
                { id: "A1", itemAfter: "DOC Broiler Ross 308 (M)", uomAfter: "Ekor", qtyAfter: 3000, whseTujuan: "WH-KDG03" },
                { id: "A2", itemAfter: "DOC Broiler Ross 308 (F)", uomAfter: "Ekor", qtyAfter: 2000, whseTujuan: "WH-KDG03" }
            ]
        }],
        createdBy: "admin_top",
        createdAt: "2026-04-25"
    }
];

function poGenMigrate(list) {
    return list.map(p => {
        if (p.remarks === undefined) p.remarks = "";
        if (p.vendorCode === undefined || p.vendorCode === "VND-SIC") p.vendorCode = "VND-CTU";
        if (p.vendorName === undefined || p.vendorName === "SIC") p.vendorName = "CTU";
        if (!p.status || p.status === "Final") p.status = "Open";
        if (p.grpoNo === undefined) p.grpoNo = p.grpoNumber || "";
        if (p.grpoDate === undefined) p.grpoDate = "";
        if (p.apNo === undefined) p.apNo = p.apNumber || "";
        if (p.apDate === undefined) p.apDate = "";
        if (p.transport === undefined) {
            p.transport = {
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
            if (p.transport.departureTime === undefined) p.transport.departureTime = "";
            if (p.transport.arrivalTime === undefined) p.transport.arrivalTime = "";
            if (p.transport.remarks === undefined) p.transport.remarks = "";
            if (p.transport.isBilled === undefined) p.transport.isBilled = false;
            if (p.transport.ta === undefined) p.transport.ta = "";
            if (p.transport.totalServiceInv === undefined) p.transport.totalServiceInv = "";
            if (p.transport.noInvoiceOa === undefined) p.transport.noInvoiceOa = "";
        }
        return p;
    });
}

/* ─── Storage Functions ─────────────────────────────────────── */
function poGenLoadAll() {
    try {
        const raw = localStorage.getItem(PO_GEN_KEY);
        if (raw) {
            const parsed = JSON.parse(raw);
            if (Array.isArray(parsed) && parsed.length) return poGenMigrate(parsed);
        }
    } catch(e) {}
    localStorage.setItem(PO_GEN_KEY, JSON.stringify(PO_GEN_DEMO));
    return poGenMigrate(PO_GEN_DEMO.map(p => ({ ...p })));
}

function poGenSaveAll(list) {
    localStorage.setItem(PO_GEN_KEY, JSON.stringify(list));
}

function poGenGet(id) {
    return poGenLoadAll().find(p => p.id === id) || null;
}

function poGenSave(po) {
    const list = poGenLoadAll();
    const idx = list.findIndex(p => p.id === po.id);
    if (idx >= 0) list[idx] = po;
    else list.unshift(po);
    poGenSaveAll(list);
}

function poGenNextId() {
    const list = poGenLoadAll();
    const nums = list.map(p => parseInt(p.id.replace("PO-GEN-", ""), 10)).filter(n => !isNaN(n));
    const next = nums.length ? Math.max(...nums) + 1 : 1;
    return "PO-GEN-" + String(next).padStart(3, "0");
}

console.log("[IBOCS] po_generation_storage.js loaded");
