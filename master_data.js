/**
 * master_data.js
 * IBOCS Master Data — Single source of truth for Item, Customer, Vendor, Warehouse.
 * Include as a <script> tag before any page scripts that need master data.
 *
 * Item categories:
 *   "Feed" — supplied by VND-SIC (SIC)
 *   "DOC"  — supplied by VND-CTU (CTU)
 */

window.IBOCS_MASTER = {

    /* ─────────────────────────────────────────────────────────────
       ITEMS
    ───────────────────────────────────────────────────────────── */
    items: [
        // ── Feed / Pakan (Vendor: SIC) ──────────────────────────
        { code: "FEED-001", name: "Pakan Pre-Starter (S-0)",  category: "Feed", vendor: "VND-SIC", uom: "Kg",  price: 52000 },
        { code: "FEED-002", name: "Pakan Starter (BR-1)",      category: "Feed", vendor: "VND-SIC", uom: "Kg",  price: 50000 },
        { code: "FEED-003", name: "Pakan Grower (BR-2)",       category: "Feed", vendor: "VND-SIC", uom: "Kg",  price: 48000 },
        { code: "FEED-004", name: "Pakan Finisher (BR-3)",     category: "Feed", vendor: "VND-SIC", uom: "Kg",  price: 46000 },
        { code: "FEED-005", name: "Pakan Layer (L-1)",         category: "Feed", vendor: "VND-SIC", uom: "Kg",  price: 49000 },
        { code: "FEED-006", name: "Pakan Petelur Konsentrat",  category: "Feed", vendor: "VND-SIC", uom: "Kg",  price: 55000 },

        // ── DOC / Day-Old-Chick (Vendor: CTU) ───────────────────
        { code: "DOC-001",  name: "DOC Broiler Cobb 500 (M)",  category: "DOC",  vendor: "VND-CTU", uom: "Ekor", price:  7500 },
        { code: "DOC-002",  name: "DOC Broiler Cobb 500 (F)",  category: "DOC",  vendor: "VND-CTU", uom: "Ekor", price:  7000 },
        { code: "DOC-003",  name: "DOC Broiler Ross 308 (M)",  category: "DOC",  vendor: "VND-CTU", uom: "Ekor", price:  8000 },
        { code: "DOC-004",  name: "DOC Broiler Ross 308 (F)",  category: "DOC",  vendor: "VND-CTU", uom: "Ekor", price:  7500 },
        { code: "DOC-005",  name: "DOC Layer Lohmann (M)",     category: "DOC",  vendor: "VND-CTU", uom: "Ekor", price: 12000 },
        { code: "DOC-006",  name: "DOC Layer Lohmann (F)",     category: "DOC",  vendor: "VND-CTU", uom: "Ekor", price: 11000 },
        { code: "DOC-007",  name: "DOC Hubbard (M)",           category: "DOC",  vendor: "VND-CTU", uom: "Ekor", price:  9000 },
        { code: "DOC-008",  name: "DOC Hubbard (F)",           category: "DOC",  vendor: "VND-CTU", uom: "Ekor", price:  8500 }
    ],

    /* ─────────────────────────────────────────────────────────────
       CUSTOMERS
    ───────────────────────────────────────────────────────────── */
    customers: [
        {
            code: "CUST-001",
            name: "PT TOP Distribusi",
            shortName: "TOP",
            contact: "Budi Santoso",
            phone: "0812-1111-0001",
            email: "top@ibocs.id",
            address: "Jl. Distribusi No. 1, Medan, Sumatera Utara",
            farm: "Farm Deli"
        },
        {
            code: "CUST-002",
            name: "PT AYM (Ayam Yummy Makmur)",
            shortName: "AYM",
            contact: "Dewi Rahayu",
            phone: "0812-2222-0002",
            email: "aym@ibocs.id",
            address: "Jl. Poultry No. 12, Binjai, Sumatera Utara",
            farm: "Farm Binjai"
        },
        {
            code: "CUST-003",
            name: "PT BMAX",
            shortName: "BMAX",
            contact: "Andi Susanto",
            phone: "0812-3333-0003",
            email: "bmax@ibocs.id",
            address: "Jl. Farm Raya No. 5, Binjai, Sumatera Utara",
            farm: "Farm BMAX"
        }
    ],

    /* ─────────────────────────────────────────────────────────────
       VENDORS
    ───────────────────────────────────────────────────────────── */
    vendors: [
        {
            code: "VND-SIC",
            name: "SIC",
            fullName: "SIC — Supplier Pakan & Feed",
            category: "Feed",
            contact: "Agus Prasetyo",
            phone: "0812-4444-0001",
            email: "sic@ibocs.id",
            address: "Jl. Industri Feed No. 7, Medan, Sumatera Utara"
        },
        {
            code: "VND-CTU",
            name: "CTU",
            fullName: "CTU — Supplier DOC / Bibit Ayam",
            category: "DOC",
            contact: "Rini Kusuma",
            phone: "0812-5555-0002",
            email: "ctu@ibocs.id",
            address: "Jl. Hatchery No. 3, Deli Serdang, Sumatera Utara"
        }
    ],

    /* ─────────────────────────────────────────────────────────────
       EXTERNAL VENDORS (Sumber DOC dari luar / bukan internal CTU)
    ───────────────────────────────────────────────────────────── */
    externalVendors: [
        { code: "EV-001", name: "PT Sumber Bibit Nusantara",   contact: "0812-1010-2020", address: "Jl. Bibit No. 1, Medan" },
        { code: "EV-002", name: "CV Hatchery Mandiri",          contact: "0812-3030-4040", address: "Jl. Hatchery No. 5, Deli Serdang" },
        { code: "EV-003", name: "UD Bibit Unggul Sejahtera",    contact: "0812-5050-6060", address: "Jl. Unggas No. 9, Binjai" }
    ],

    /* ─────────────────────────────────────────────────────────────
       BRANDS (DOC)
    ───────────────────────────────────────────────────────────── */
    brands: [
        { code: "BRD-001", name: "Cobb 500",   type: "Broiler", description: "Ross Broiler strain, growth-optimized" },
        { code: "BRD-002", name: "Ross 308",    type: "Broiler", description: "Cobb Broiler strain, feed-efficient" },
        { code: "BRD-003", name: "Lohmann",     type: "Layer",   description: "Layer strain, high egg production" },
        { code: "BRD-004", name: "Hubbard",     type: "Broiler", description: "Hubbard Broiler strain, robust" }
    ],

    /* ─────────────────────────────────────────────────────────────
       PLANS
       owner     : code dari customers atau vendors
       ownerType : "customer" | "vendor"
    ───────────────────────────────────────────────────────────── */
    plans: [
        // ── CTU (Vendor) ────────────────────────────────────────
        {
            code: "100001101", description: "CTU-BROILER COBB BATCH-01",
            no: "81", documentDate: "2025-03-01", startDate: "2025-03-10", endDate: "2025-04-20",
            project: "", distRules: "PROD;R001;CTU;F00001",
            initialStock: 15000, totalDocIn: 15200,
            typeOfChicken: "11001", descOfChicken: "AYAM BROILER",
            docWeight: 40, batchNumber: "BTH-2025-001",
            warehouseCode: "WH-KDG01", warehouseName: "Gudang Kandang 01",
            hatchery: "Star",
            owner: "VND-CTU", ownerType: "vendor"
        },
        {
            code: "100001102", description: "CTU-LAYER LOHMANN BATCH-01",
            no: "82", documentDate: "2025-03-05", startDate: "2025-03-15", endDate: "2025-05-01",
            project: "", distRules: "PROD;R001;CTU;F00002",
            initialStock: 8000, totalDocIn: 8050,
            typeOfChicken: "11002", descOfChicken: "AYAM LAYER",
            docWeight: 38, batchNumber: "BTH-2025-002",
            warehouseCode: "WH-KDG02", warehouseName: "Gudang Kandang 02",
            hatchery: "Star",
            owner: "VND-CTU", ownerType: "vendor"
        },
        {
            code: "100001103", description: "CTU-BROILER ROSS BATCH-02",
            no: "83", documentDate: "2025-04-01", startDate: "2025-04-10", endDate: "2025-05-20",
            project: "P-2025-Q2", distRules: "PROD;R002;CTU;F00003",
            initialStock: 20000, totalDocIn: 20300,
            typeOfChicken: "11001", descOfChicken: "AYAM BROILER",
            docWeight: 42, batchNumber: "",
            warehouseCode: "WH-KDG01", warehouseName: "Gudang Kandang 01",
            hatchery: "Gemilang",
            owner: "VND-CTU", ownerType: "vendor"
        },

        // ── TOP (Customer CUST-001) ──────────────────────────────
        {
            code: "100001111", description: "TOP-BROILER COBB PERIODE-01",
            no: "91", documentDate: "2025-03-10", startDate: "2025-03-20", endDate: "2025-04-30",
            project: "", distRules: "PROD;R003;TOP;F00010",
            initialStock: 10000, totalDocIn: 10120,
            typeOfChicken: "11001", descOfChicken: "AYAM",
            docWeight: 40, batchNumber: "BTH-TOP-001",
            warehouseCode: "WH-KDG01", warehouseName: "Gudang Kandang 01",
            hatchery: "Star",
            owner: "CUST-001", ownerType: "customer"
        },
        {
            code: "100001112", description: "TOP-BROILER ROSS PERIODE-02",
            no: "92", documentDate: "2025-04-05", startDate: "2025-04-15", endDate: "2025-05-25",
            project: "", distRules: "PROD;R003;TOP;F00011",
            initialStock: 12000, totalDocIn: 12200,
            typeOfChicken: "11001", descOfChicken: "AYAM",
            docWeight: 41, batchNumber: "",
            warehouseCode: "WH-KDG02", warehouseName: "Gudang Kandang 02",
            hatchery: "Star",
            owner: "CUST-001", ownerType: "customer"
        },

        // ── AYM (Customer CUST-002) ──────────────────────────────
        {
            code: "100001119", description: "AYM-BROILER COBB BATCH-03",
            no: "95", documentDate: "2025-04-09", startDate: "2025-04-12", endDate: "2025-05-18",
            project: "", distRules: "PROD;R003;AYM;F00009",
            initialStock: 21700, totalDocIn: 21917,
            typeOfChicken: "11001", descOfChicken: "AYAM",
            docWeight: 38, batchNumber: "",
            warehouseCode: "WH-KDG03", warehouseName: "Gudang Kandang 03",
            hatchery: "Star",
            owner: "CUST-002", ownerType: "customer"
        },
        {
            code: "100001120", description: "AYM-LAYER LOHMANN BATCH-01",
            no: "96", documentDate: "2025-04-10", startDate: "2025-04-20", endDate: "2025-06-01",
            project: "P-2025-LAYER", distRules: "PROD;R003;AYM;F00010",
            initialStock: 5000, totalDocIn: 5080,
            typeOfChicken: "11002", descOfChicken: "AYAM LAYER",
            docWeight: 36, batchNumber: "BTH-AYM-002",
            warehouseCode: "WH-KDG03", warehouseName: "Gudang Kandang 03",
            hatchery: "Gemilang",
            owner: "CUST-002", ownerType: "customer"
        },

        // ── BMAX (Customer CUST-003) ─────────────────────────────
        {
            code: "100001131", description: "BMAX-BROILER HUBBARD BATCH-01",
            no: "101", documentDate: "2025-03-15", startDate: "2025-03-25", endDate: "2025-05-05",
            project: "", distRules: "PROD;R004;BMAX;F00020",
            initialStock: 18000, totalDocIn: 18150,
            typeOfChicken: "11001", descOfChicken: "AYAM",
            docWeight: 39, batchNumber: "BTH-BMAX-001",
            warehouseCode: "WH-KDG02", warehouseName: "Gudang Kandang 02",
            hatchery: "Star",
            owner: "CUST-003", ownerType: "customer"
        },
        {
            code: "100001132", description: "BMAX-BROILER COBB BATCH-02",
            no: "102", documentDate: "2025-04-12", startDate: "2025-04-22", endDate: "2025-06-02",
            project: "P-2025-BMAX", distRules: "PROD;R004;BMAX;F00021",
            initialStock: 25000, totalDocIn: 25400,
            typeOfChicken: "11001", descOfChicken: "AYAM",
            docWeight: 41, batchNumber: "",
            warehouseCode: "WH-KDG02", warehouseName: "Gudang Kandang 02",
            hatchery: "Gemilang",
            owner: "CUST-003", ownerType: "customer"
        }
    ],

    /* ─────────────────────────────────────────────────────────────
       WAREHOUSES
    ───────────────────────────────────────────────────────────── */
    warehouses: [
        { code: "WH-KDG01", name: "Gudang Kandang 01", location: "Medan",         capacity: 50000 },
        { code: "WH-KDG02", name: "Gudang Kandang 02", location: "Deli Serdang",  capacity: 40000 },
        { code: "WH-KDG03", name: "Gudang Kandang 03", location: "Binjai",        capacity: 35000 }
    ]
};

/* ─────────────────────────────────────────────────────────────
   HELPER FUNCTIONS
───────────────────────────────────────────────────────────── */
const M = window.IBOCS_MASTER;

/** Lookup single item by code */
M.getItem = code => M.items.find(i => i.code === code) || null;

/** Lookup single customer by code */
M.getCustomer = code => M.customers.find(c => c.code === code) || null;

/** Lookup single vendor by code */
M.getVendor = code => M.vendors.find(v => v.code === code) || null;

/** Lookup single warehouse by code */
M.getWarehouse = code => M.warehouses.find(w => w.code === code) || null;

/** Filter items by category ("Feed" | "DOC") */
M.getItemsByCategory = cat => M.items.filter(i => i.category === cat);

/** Filter items by vendor code */
M.getItemsByVendor = vCode => M.items.filter(i => i.vendor === vCode);

/** Resolve vendor code from item code */
M.getVendorForItem = itemCode => {
    const item = M.getItem(itemCode);
    return item ? M.getVendor(item.vendor) : null;
};

/** Build <option> list for a <select> — optionally filtered by category */
M.buildItemOptions = (category = null) => {
    const list = category ? M.getItemsByCategory(category) : M.items;
    return list.map(i => `<option value="${i.code}">[${i.category}] ${i.code} — ${i.name} (${i.uom})</option>`).join("");
};

M.buildCustomerOptions = () =>
    M.customers.map(c => `<option value="${c.code}">${c.name}</option>`).join("");

M.buildVendorOptions = () =>
    M.vendors.map(v => `<option value="${v.code}">${v.name}</option>`).join("");

M.buildWarehouseOptions = () =>
    M.warehouses.map(w => `<option value="${w.code}">${w.code} — ${w.name} (${w.location})</option>`).join("");

/** Lookup single external vendor by code */
M.getExternalVendor = code => M.externalVendors.find(v => v.code === code) || null;

/** Build <option> list for external vendors */
M.buildExternalVendorOptions = () =>
    M.externalVendors.map(v => `<option value="${v.code}">${v.name}</option>`).join("");

/** Lookup single plan by code */
M.getPlan = code => M.plans.find(p => p.code === code) || null;

/** Filter plans by owner code (customer or vendor) */
M.getPlansByOwner = ownerCode => M.plans.filter(p => p.owner === ownerCode);

/** Build <option> list for plans filtered by owner */
M.buildPlanOptions = (ownerCode = null) => {
    const list = ownerCode ? M.getPlansByOwner(ownerCode) : M.plans;
    return list.map(p => `<option value="${p.code}">${p.code} — ${p.description}</option>`).join("");
};

/** Lookup single brand by code */
M.getBrand = code => M.brands.find(b => b.code === code) || null;

/** Filter brands by type ("Broiler" | "Layer") */
M.getBrandsByType = type => M.brands.filter(b => b.type === type);

/** Build <option> list for brands */
M.buildBrandOptions = (type = null) => {
    const list = type ? M.getBrandsByType(type) : M.brands;
    return list.map(b => `<option value="${b.code}">${b.name} (${b.type})</option>`).join("");
};

console.log("[IBOCS] master_data.js loaded —",
    M.items.length, "items,",
    M.customers.length, "customers,",
    M.vendors.length, "vendors,",
    M.warehouses.length, "warehouses,",
    M.brands.length, "brands,",
    M.plans.length, "plans");
