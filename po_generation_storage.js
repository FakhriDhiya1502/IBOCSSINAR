/**
 * po_generation_storage.js
 * Storage untuk PO Generation — PO yang di-generate dari DO Draft.
 */

const PO_GEN_KEY = "IBOCS_po_generation";

/* ─── Demo Data ─────────────────────────────────────────────── */
const PO_GEN_DEMO = [];

function poGenMigrate(list) {
    return list.map(p => {
        if (p.remarks === undefined) p.remarks = "";
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
        if (raw) return poGenMigrate(JSON.parse(raw));
    } catch(e) {}
    localStorage.setItem(PO_GEN_KEY, JSON.stringify(PO_GEN_DEMO));
    return [];
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
