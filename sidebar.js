/**
 * iBOCS Sidebar Component
 * Role-based sidebar with grouped sub-menus per product (Feed, DOC).
 *
 * Roles:
 *   customer       — peternak/buyer (TOP, AYM, BMAX)
 *   vendor         — supplier (VND-SIC = Feed, VND-CTU = DOC)
 *   admin_hatchery — admin CTU, kelola DO Draft DOC
 *   admin_sales    — sales, review DO Draft & generate DO
 *   admin_top      — TOP/AYM/BMAX, PO Generation dari DO Draft
 *   admin          — system admin, settings only
 *   super_admin    — all access
 */

class SidebarSystem {
    constructor(role, activePageId) {
        if (!role) {
            try {
                const userData = JSON.parse(localStorage.getItem("IBOCS_user") || "{}");
                this.role = userData.role || "vendor";
            } catch (e) {
                this.role = "vendor";
            }
        } else {
            this.role = role;
        }
        this.activePageId = activePageId;
        this.containerId = "sidebar-container";
        this.themeColor = "#1a237e";
    }

    getMenuItems() {
        const R = this.role;

        const allItems = [
            // ── Dashboard ──────────────────────────────────────────────
            {
                id: "forecast_dashboard",
                label: "Dashboard",
                icon: "bi-speedometer2",
                url: "forecast_dashboard.html",
                roles: ["customer", "vendor", "admin_hatchery", "admin_sales", "admin_top", "super_admin"]
            },

            // ── DOC ────────────────────────────────────────────────────
            {
                id: "doc_parent",
                label: "DOC",
                icon: "bi-egg",
                roles: ["customer", "admin_hatchery", "admin_sales", "admin_top", "super_admin"],
                children: [
                    {
                        id: "forecast_doc",
                        label: "Plan Report",
                        icon: "bi-graph-up-arrow",
                        url: "DOCForecast.html",
                        roles: ["customer", "super_admin"]
                    },
                    {
                        id: "doc_draft_list",
                        label: "DO Draft",
                        icon: "bi-file-earmark-text",
                        url: "hatchery_doc_draft_list.html",
                        roles: ["admin_hatchery", "admin_sales", "super_admin"]
                    },
                    {
                        id: "po_generation_list",
                        label: "PO Generation",
                        icon: "bi-file-earmark-plus",
                        url: "top_po_generation_list.html",
                        roles: ["admin_top", "super_admin"]
                    }
                    // },
                    // {
                    //     id: "po_list",
                    //     label: "Purchase Order",
                    //     icon: "bi-file-earmark-plus",
                    //     url: "top_po_list.html",
                    //     roles: ["admin_top", "super_admin"]
                    // }
                ]
            },

            // ── Feed ───────────────────────────────────────────────────
            {
                id: "feed_parent",
                label: "Feed",
                icon: "bi-box-seam",
                roles: ["customer", "vendor", "super_admin"],
                children: [
                    {
                        id: "forecast_feed",
                        label: "Feed Forecast",
                        icon: "bi-graph-up-arrow",
                        url: "customer_ForecastList.html",
                        roles: ["customer", "super_admin"]
                    },
                    // {
                    //     id: "forecast_history",
                    //     label: "Forecast History",
                    //     icon: "bi-clock-history",
                    //     url: "customer_ForecastHistory.html",
                    //     roles: ["customer", "super_admin"]
                    // },
                    {
                        id: "orders",
                        label: "Purchase Order",
                        icon: "bi-list-ul",
                        url: "customer_orders.html",
                        roles: ["customer", "super_admin"]
                    },
                    {
                        id: "incoming_po",
                        label: "Sales Order",
                        icon: "bi-check2-square",
                        url: "vendor_incoming_po_list.html",
                        roles: ["vendor", "super_admin"]
                    }
                ]
            },



            // ── Finance (AR / AP) ───────────────────────────────────────
            {
                id: "finance_parent",
                label: "Finance",
                icon: "bi-credit-card-2-front",
                roles: ["customer", "vendor", "super_admin"],
                children: [
                    {
                        id: "ap_list",
                        label: "Accounts Payable",
                        icon: "bi-file-earmark-minus",
                        url: "customer_AP.html",
                        roles: ["customer", "super_admin"]
                    },
                    {
                        id: "ar_list",
                        label: "Accounts Receivable",
                        icon: "bi-file-earmark-plus",
                        url: "customer_AR.html",
                        roles: ["vendor", "super_admin"]
                    }
                ]
            },

            // ── Transaction Monitoring ──────────────────────────────────
            {
                id: "po_so_monitor",
                label: "Transaction Monitoring",
                icon: "bi-arrow-left-right",
                url: "po_so_monitor.html",
                roles: ["customer", "vendor", "admin_sales", "super_admin"]
            },

            // ── Settings (admin) ────────────────────────────────────────
            {
                id: "settings",
                label: "Settings",
                icon: "bi-gear",
                url: "admin_settings.html",
                roles: ["admin", "super_admin"]
            }
        ];

        if (R === "super_admin") return allItems;
        return allItems.filter(item => item.roles.includes(R));
    }

    _isChildActive(children) {
        return children.some(c => c.id === this.activePageId);
    }

    _filterChildren(children) {
        const R = this.role;
        if (R === "super_admin") return children;
        return children.filter(c => c.roles.includes(R));
    }

    buildList(items) {
        return items.map(item => {
            if (item.children) return this._buildParentItem(item);
            return this._buildLeafItem(item);
        }).join("");
    }

    _buildLeafItem(item) {
        const isActive = this.activePageId === item.id;
        const activeStyle = isActive
            ? `background-color: ${this.themeColor}; color: #fff;`
            : `background-color: transparent; color: #374151;`;
        return `
            <a href="${item.url}"
               class="list-group-item list-group-item-action border-0 rounded mb-1 d-flex align-items-center gap-2"
               style="${activeStyle} padding: 10px 14px; font-size: 14px; font-weight: ${isActive ? '700' : '500'}; text-decoration: none;">
                <i class="bi ${item.icon}" style="font-size:15px;"></i>
                ${item.label}
            </a>`;
    }

    _buildParentItem(item) {
        const collapseId = `collapse_${item.id}`;
        const visibleChildren = this._filterChildren(item.children);
        const childActive = this._isChildActive(visibleChildren);
        const parentStyle = childActive
            ? `background-color: ${this.themeColor}20; color: ${this.themeColor};`
            : `background-color: transparent; color: #374151;`;

        const childrenHtml = visibleChildren.map(child => {
            const isActive = this.activePageId === child.id;
            const activeStyle = isActive
                ? `background-color: ${this.themeColor}; color: #fff;`
                : `background-color: transparent; color: #374151;`;
            return `
                <a href="${child.url}"
                   class="list-group-item list-group-item-action border-0 rounded mb-1 d-flex align-items-center gap-2"
                   style="${activeStyle} padding: 8px 14px 8px 32px; font-size: 13px; font-weight: ${isActive ? '700' : '400'}; text-decoration: none;">
                    <i class="bi ${child.icon}" style="font-size:13px;"></i>
                    ${child.label}
                </a>`;
        }).join("");

        return `
            <a class="list-group-item list-group-item-action border-0 rounded mb-1 d-flex align-items-center gap-2"
               style="${parentStyle} padding: 10px 14px; font-size: 14px; font-weight: ${childActive ? '700' : '500'}; text-decoration: none; cursor: pointer;"
               data-bs-toggle="collapse" data-bs-target="#${collapseId}" aria-expanded="${childActive ? 'true' : 'false'}">
                <i class="bi ${item.icon}" style="font-size:15px;"></i>
                <span class="flex-grow-1">${item.label}</span>
                <i class="bi ${childActive ? 'bi-chevron-down' : 'bi-chevron-right'}" style="font-size:11px; opacity:0.6;" id="${collapseId}_chevron"></i>
            </a>
            <div class="collapse ${childActive ? 'show' : ''}" id="${collapseId}">
                ${childrenHtml}
            </div>`;
    }

    render() {
        const container = document.getElementById(this.containerId);
        if (!container) return;

        container.classList.add("d-none", "d-lg-block");

        const items = this.getMenuItems();
        const listHtml = this.buildList(items);
        const logoutHtml = `
            <div class="dropdown-divider my-3"></div>
            <a href="login.html"
               onclick="localStorage.removeItem('IBOCS_user')"
               class="list-group-item list-group-item-action border-0 rounded d-flex align-items-center gap-2"
               style="background: transparent; color: #dc3545; font-size: 14px; font-weight: 500; text-decoration: none; padding: 10px 14px;">
                <i class="bi bi-box-arrow-left" style="font-size:15px;"></i> Logout
            </a>`;

        const sidebarContent = `
            <div class="list-group list-group-flush">
                ${listHtml}
                ${logoutHtml}
            </div>`;

        container.innerHTML = `
            <div class="card border-0 shadow-sm" style="min-height: calc(100vh - 80px); background: #f8f9fa; border-radius: 12px;">
                <div class="card-body p-2">
                    ${sidebarContent}
                </div>
            </div>`;

        // Chevron rotation on collapse toggle
        document.querySelectorAll('[data-bs-toggle="collapse"]').forEach(trigger => {
            const targetId = trigger.getAttribute("data-bs-target");
            const collapseEl = document.querySelector(targetId);
            const chevronEl = document.querySelector(`${targetId}_chevron`);
            if (!collapseEl || !chevronEl) return;
            collapseEl.addEventListener("show.bs.collapse", () => {
                chevronEl.classList.replace("bi-chevron-right", "bi-chevron-down");
            });
            collapseEl.addEventListener("hide.bs.collapse", () => {
                chevronEl.classList.replace("bi-chevron-down", "bi-chevron-right");
            });
        });

        // Navbar brand
        const brand = document.querySelector(".navbar-brand");
        if (brand) {
            brand.style.color = this.themeColor;
            brand.style.fontWeight = "800";
        }

        // Mobile offcanvas
        const navbar = document.querySelector(".navbar .container-fluid");
        if (navbar && !document.getElementById("mobileSidebarToggle")) {
            const toggleBtn = document.createElement("button");
            toggleBtn.className = "navbar-toggler d-block d-lg-none me-2 border-0";
            toggleBtn.id = "mobileSidebarToggle";
            toggleBtn.type = "button";
            toggleBtn.setAttribute("data-bs-toggle", "offcanvas");
            toggleBtn.setAttribute("data-bs-target", "#offcanvasSidebar");
            toggleBtn.innerHTML = '<span class="navbar-toggler-icon"></span>';
            const brandEl = navbar.querySelector(".navbar-brand");
            if (brandEl) brandEl.parentNode.insertBefore(toggleBtn, brandEl);
        }

        if (!document.getElementById("offcanvasSidebar")) {
            const offcanvasDiv = document.createElement("div");
            offcanvasDiv.className = "offcanvas offcanvas-start";
            offcanvasDiv.tabIndex = -1;
            offcanvasDiv.id = "offcanvasSidebar";
            offcanvasDiv.innerHTML = `
                <div class="offcanvas-header border-bottom">
                    <h5 class="offcanvas-title fw-bold" style="color: ${this.themeColor}">iBOCS</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div class="offcanvas-body p-2">
                    ${sidebarContent}
                </div>`;
            document.body.appendChild(offcanvasDiv);
        }
    }
}
