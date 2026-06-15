/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import "style.css"

// ================= DEFAULT PRESET DATA =================

export const DEFAULT_THEMES = [
  {
    id: "lavender-light",
    name: "Lavender Dusk",
    primary: "#8b5cf6",
    secondary: "#a78bfa",
    background: "#faf5ff",
    card: "#ffffff",
    text: "#3b0764",
    border: "#f3e8ff",
    isDark: false
  },
  {
    id: "ocean-calm",
    name: "Ocean Drift",
    primary: "#0ea5e9",
    secondary: "#38bdf8",
    background: "#f0f9ff",
    card: "#ffffff",
    text: "#0369a1",
    border: "#e0f2fe",
    isDark: false
  },
  {
    id: "forest-lodge",
    name: "Forest Moss",
    primary: "#10b981",
    secondary: "#34d399",
    background: "#f0fdf4",
    card: "#ffffff",
    text: "#064e3b",
    border: "#dcfce7",
    isDark: false
  },
  {
    id: "sunset-glow",
    name: "Warm Amber",
    primary: "#f97316",
    secondary: "#fb923c",
    background: "#fff7ed",
    card: "#ffffff",
    text: "#7c2d12",
    border: "#ffedd5",
    isDark: false
  },
  {
    id: "cyberpunk-neon",
    name: "Neon Cyber",
    primary: "#ec4899",
    secondary: "#f472b6",
    background: "#0f172a",
    card: "#1e293b",
    text: "#f1f5f9",
    border: "#334155",
    isDark: true
  },
  {
    id: "minimal-slate",
    name: "Charcoal",
    primary: "#1e293b",
    secondary: "#475569",
    background: "#f8fafc",
    card: "#ffffff",
    text: "#0f172a",
    border: "#cbd5e1",
    isDark: false
  }
]

export const DEFAULT_PROFILES = [
  {
    id: "p1",
    name: "Alex Rivera",
    avatarUrl: "😊",
    color: "#3b82f6",
    role: "Admin",
    bio: "Workspace developer. Focuses on minimalist templates.",
    createdAt: new Date("2026-01-10T12:00:00Z").toISOString()
  },
  {
    id: "p2",
    name: "Charlie Chen",
    avatarUrl: "😺",
    color: "#f97316",
    role: "Moderator",
    bio: "Workspace moderator. Assists with local layout setups.",
    createdAt: new Date("2026-02-15T09:30:00Z").toISOString()
  },
  {
    id: "p3",
    name: "Jordan Finch",
    avatarUrl: "🦊",
    color: "#10b981",
    role: "Member",
    bio: "Customizer enthusiast. Keen browser workspace architect.",
    createdAt: new Date("2026-03-20T16:45:00Z").toISOString()
  }
]

export const DEFAULT_BOARDS = [
  {
    id: "b1",
    name: "General Discussion",
    description:
      "Main board to coordinate, check layout settings, and customize templates.",
    themeId: "lavender-light",
    icon: "MessageSquare",
    createdAt: new Date("2026-06-01T08:00:00Z").toISOString(),
    createdBy: "p1",
    pinnedMessageIds: ["m1"]
  },
  {
    id: "b2",
    name: "Creative Corner",
    description:
      "Workspace for visual layouts, aesthetic configurations, and style sharing.",
    themeId: "sunset-glow",
    icon: "Palette",
    createdAt: new Date("2026-06-02T10:00:00Z").toISOString(),
    createdBy: "p3"
  },
  {
    id: "b3",
    name: "Guide & Workspace FAQ",
    description:
      "Offline tips and usage instructions to optimize static hosts.",
    themeId: "minimal-slate",
    icon: "HelpCircle",
    createdAt: new Date("2026-06-03T11:00:00Z").toISOString(),
    createdBy: "p1"
  }
]

export const DEFAULT_MESSAGES = [
  {
    id: "m1",
    boardId: "b1",
    profileId: "p1",
    content:
      "Welcome! This static message board operates entirely inside your browser. No external databases, no tracker scripts—just standard LocalStorage persistence. Perfect to run on lightweight hosting spaces like Neocities or GitHub pages! Select another identity below or tweak custom themes in the header.",
    createdAt: new Date("2026-06-14T10:00:00Z").toISOString(),
    isPinned: true,
    reactions: [
      { emoji: "✨", profileIds: ["p2", "p3"] },
      { emoji: "🚀", profileIds: ["p1"] },
      { emoji: "🔥", profileIds: ["p3"] }
    ],
    replies: [
      {
        id: "r1",
        profileId: "p2",
        content: "This renders instantaneously inside our browser.",
        createdAt: new Date("2026-06-14T11:05:00Z").toISOString()
      },
      {
        id: "r2",
        profileId: "p3",
        content:
          "I love that we can download raw JSON backups and import them directly.",
        createdAt: new Date("2026-06-14T11:15:00Z").toISOString()
      }
    ]
  },
  {
    id: "m2",
    boardId: "b1",
    profileId: "p2",
    content:
      "Try switching identities to write a message under a different profile. Click the user profile widget in the left sidebar root to browse active aliases or create a new one instantly with a custom color color boundary!",
    createdAt: new Date("2026-06-14T14:30:00Z").toISOString(),
    reactions: [
      { emoji: "👍", profileIds: ["p3"] },
      { emoji: "✨", profileIds: ["p1", "p2"] }
    ],
    replies: []
  },
  {
    id: "m3",
    boardId: "b2",
    profileId: "p3",
    content:
      'I loaded a custom sunset theme for this creative board. Check "Theme Config" in the top-right to adjust hex color values directly or apply presets.',
    createdAt: new Date("2026-06-15T09:00:00Z").toISOString(),
    reactions: [{ emoji: "🎨", profileIds: ["p1", "p2"] }],
    replies: [
      {
        id: "r3",
        profileId: "p1",
        content:
          "Perfect. These color rules look beautiful on a simple card list layout!",
        createdAt: new Date("2026-06-15T09:30:00Z").toISOString()
      }
    ]
  },
  {
    id: "m4",
    boardId: "b3",
    profileId: "p1",
    content:
      "### Fast Usage Reference\n\n1. **LocalStorage**: Everything stays in your browser memory natively.\n2. **JSON Export**: Click the settings icon in the top right to download your entire board workspace. Take this backup file and import it anywhere to restore identical states.\n3. **Formatting**: Supports lists, basic subtitles, and dynamic image attachments. Add a link using the Media URL tool inside the composer!\n4. **Profile Switcher**: Create new actors, configure moderator authority, and write comments safely.",
    createdAt: new Date("2026-06-15T12:00:00Z").toISOString(),
    reactions: [
      { emoji: "👍", profileIds: ["p3"] },
      { emoji: "✅", profileIds: ["p2"] }
    ],
    replies: []
  }
]

export const DEFAULT_SETTINGS = {
  darkMode: false,
  density: "comfortable",
  messageOrdering: "oldest",
  allowReplies: true,
  allowReactions: true
}

export const INITIAL_STATE = {
  version: "1.0.0",
  profiles: DEFAULT_PROFILES,
  boards: DEFAULT_BOARDS,
  messages: DEFAULT_MESSAGES,
  activeProfileId: "p1",
  activeBoardId: "b1",
  settings: DEFAULT_SETTINGS
}

// ================= STATE CONTROLLER WRAPPER =================

const LOCAL_STORAGE_KEY = "MESSAGE_BOARDS_APP_STATE"

class AppStateMachine {
  constructor() {
    this.state = this.loadState()
  }

  loadState() {
    try {
      const stored = localStorage.getItem(LOCAL_STORAGE_KEY)
      if (stored) {
        const parsed = JSON.parse(stored)
        if (parsed.profiles && parsed.boards && parsed.messages) {
          return parsed
        }
      }
    } catch (e) {
      console.error("Failed to resolve database state from localStorage:", e)
    }
    return JSON.parse(JSON.stringify(INITIAL_STATE))
  }

  saveState() {
    try {
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(this.state))
    } catch (e) {
      console.error("Failed to commit database changes:", e)
    }
  }

  getState() {
    return this.state
  }

  updateState(updater) {
    this.state = updater(this.state)
    this.saveState()
  }

  getActiveBoard() {
    return (
      this.state.boards.find(b => b.id === this.state.activeBoardId) ||
      this.state.boards[0]
    )
  }

  getActiveProfile() {
    return (
      this.state.profiles.find(p => p.id === this.state.activeProfileId) ||
      this.state.profiles[0]
    )
  }

  getBoardTheme(board) {
    return (
      board.customTheme ||
      DEFAULT_THEMES.find(t => t.id === board.themeId) ||
      DEFAULT_THEMES[0]
    )
  }
}

const appStore = new AppStateMachine()

// ================= CUSTOM VECTOR ICON ENGINE =================

function getIconSvg(name, className = "w-4 h-4") {
  const base = `<svg class="${className}" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">`
  switch (name) {
    case "MessageSquare":
      return `${base}<path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>`
    case "Palette":
      return `${base}<path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 14.7255 3.09032 17.1962 4.85857 19C5.35857 19.5 5.35857 20.5 4.85857 21C4.35857 21.5 3 21.5 3 22H12Z"/><circle cx="7.5" cy="10.5" r="1.5" fill="currentColor"/><circle cx="11.5" cy="7.5" r="1.5" fill="currentColor"/><circle cx="16.5" cy="9.5" r="1.5" fill="currentColor"/><circle cx="15.5" cy="14.5" r="1.5" fill="currentColor"/></svg>`
    case "HelpCircle":
      return `${base}<circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>`
    case "Pin":
      return `${base}<path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>`
    case "Trash2":
      return `${base}<polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/><line x1="10" y1="11" x2="10" y2="17"/><line x1="14" y1="11" x2="14" y2="17"/></svg>`
    case "Edit3":
      return `${base}<path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/></svg>`
    case "Check":
      return `${base}<polyline points="20 6 9 17 4 12"/></svg>`
    case "Plus":
      return `${base}<line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>`
    case "UserCheck":
      return `${base}<path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="8.5" cy="7" r="4"/><polyline points="17 11 19 13 23 9"/></svg>`
    case "Shield":
      return `${base}<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>`
    case "X":
      return `${base}<line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>`
    case "ArrowRight":
      return `${base}<line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>`
    case "Clock":
      return `${base}<circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>`
    case "Link":
      return `${base}<path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>`
    default:
      return `${base}<circle cx="12" cy="12" r="10"/></svg>`
  }
}

// ================= SIMPLE LOCAL HOST MARKDOWN PARSER =================

function parseMarkdownToHtml(content) {
  let escaped = content
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")

  // Header ###
  escaped = escaped.replace(
    /^### (.*?)$/gm,
    '<h4 class="font-display font-bold text-sm text-[var(--board-text)] mt-4 mb-2">$1</h4>'
  )

  // Bold **word**
  escaped = escaped.replace(
    /\*\*(.*?)\*\*/g,
    '<strong class="font-bold">$1</strong>'
  )

  // Custom Codeblock
  escaped = escaped.replace(
    /```([\s\S]*?)```/g,
    '<pre class="bg-slate-100 dark:bg-slate-950 p-2 text-xs font-mono rounded-lg my-2 overflow-x-auto text-slate-800 dark:text-slate-200 border">$1</pre>'
  )

  // Inline Code `code`
  escaped = escaped.replace(
    /`(.*?)`/g,
    '<code class="px-1.5 py-0.5 rounded bg-slate-100 dark:bg-slate-950 text-rose-500 font-mono text-[11px] border">$1</code>'
  )

  // Blockquotes
  escaped = escaped.replace(
    /^&gt; (.*?)$/gm,
    '<blockquote class="border-l-4 border-slate-300 dark:border-slate-700 pl-3 italic text-slate-500 dark:text-slate-400">$1</blockquote>'
  )

  // Bullet Lists
  escaped = escaped.replace(
    /^\s*[-*]\s+(.*?)$/gm,
    '<li class="ml-4 list-disc text-xs text-[var(--board-text)]">$1</li>'
  )

  // Numbered Lists
  escaped = escaped.replace(
    /^\s*\d+\.\s+(.*?)$/gm,
    '<li class="ml-4 list-decimal text-xs text-[var(--board-text)]">$1</li>'
  )

  // Line breaks
  return escaped.replace(/\n/g, "<br>")
}

// Helper: formats dates cleanly
function formatDate(isoString) {
  const d = new Date(isoString)
  return d.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit"
  })
}

// ================= CORE RENDERING SYSTEM =================

// State tracking for layout edits and overlays
let searchQuery = ""
let activeImageLink = ""
let isEditingActiveBoard = false
let editingMessageId = null
let activePalettePresetId = null

// Modal references
const newBoardModal = document.getElementById("new-board-modal")
const boardThemeModal = document.getElementById("board-theme-modal")
const settingsModal = document.getElementById("settings-modal")

// Main draw routine
export function renderAll() {
  const state = appStore.getState()
  const activeBoard = appStore.getActiveBoard()
  const activeTheme = appStore.getBoardTheme(activeBoard)

  // Apply board style classes dynamically to our container
  const arena = document.getElementById("board-arena")
  arena.style.setProperty("--board-background", activeTheme.background)
  arena.style.setProperty("--board-card", activeTheme.card)
  arena.style.setProperty("--board-border", activeTheme.border)
  arena.style.setProperty("--board-text", activeTheme.text)
  arena.style.setProperty("--board-primary", activeTheme.primary)

  // Global settings override
  const isDarkGlobal = state.settings.darkMode
  if (isDarkGlobal) {
    document.documentElement.classList.add("dark")
  } else {
    document.documentElement.classList.remove("dark")
  }

  // Draw each visual frame
  renderSidebarBoards()
  renderProfileSwitcher()
  renderBoardHeader()
  renderMessagesStream()
  renderComposerBar()
  renderThemeColorsInForm()
}

// Draw boards list in sidebar
function renderSidebarBoards() {
  const state = appStore.getState()
  const container = document.getElementById("boards-list-container")
  container.innerHTML = ""

  state.boards.forEach(board => {
    const isSelected = board.id === state.activeBoardId
    const button = document.createElement("button")
    button.type = "button"
    button.className = `w-full flex items-center justify-between p-2.5 rounded-xl text-left text-xs font-medium cursor-pointer transition-all group ${
      isSelected
        ? "bg-indigo-50 text-indigo-700 dark:bg-indigo-950/40 dark:text-indigo-300 border-l-4 border-indigo-650"
        : "text-slate-600 hover:bg-slate-50 dark:text-slate-300 dark:hover:bg-slate-800"
    }`

    // Left half: Icon & Name
    const flexLeft = document.createElement("div")
    flexLeft.className = "flex items-center gap-2.5 min-w-0"
    flexLeft.innerHTML = `
      <div class="w-4.5 h-4.5 text-indigo-500 shrink-0">
        ${getIconSvg(board.icon, "w-4 h-4")}
      </div>
      <span class="truncate">${board.name}</span>
    `
    button.appendChild(flexLeft)

    // Right half: Delete option (only if count > 1)
    if (state.boards.length > 1) {
      const deleteBtn = document.createElement("button")
      deleteBtn.type = "button"
      deleteBtn.className =
        "md:opacity-0 group-hover:opacity-100 p-1 text-slate-400 hover:text-rose-650 dark:hover:text-rose-450 rounded cursor-pointer transition-opacity"
      deleteBtn.innerHTML = getIconSvg("Trash2", "w-3.5 h-3.5")
      deleteBtn.title = "Delete Board"
      deleteBtn.onclick = e => {
        e.stopPropagation()
        if (
          confirm(
            `Are you sure you want to delete board "${board.name}"? This deletes all associated local posts!`
          )
        ) {
          const remaining = state.boards.filter(b => b.id !== board.id)
          appStore.updateState(prev => ({
            ...prev,
            boards: remaining,
            messages: prev.messages.filter(m => m.boardId !== board.id),
            activeBoardId:
              prev.activeBoardId === board.id
                ? remaining[0].id
                : prev.activeBoardId
          }))
          renderAll()
        }
      }
      button.appendChild(deleteBtn)
    }

    // Swapping trigger
    button.onclick = e => {
      // guard delete click
      if (e.target.closest("button")?.title === "Delete Board") return
      appStore.updateState(prev => ({ ...prev, activeBoardId: board.id }))
      isEditingActiveBoard = false
      const sidebarNav = document.getElementById("sidebar")
      const overlay = document.getElementById("sidebar-overlay")
      sidebarNav?.classList.add("-translate-x-full")
      overlay?.classList.add("hidden")
      renderAll()
    }

    container.appendChild(button)
  })
}

// Draw profile switcher dropdown in footer
let isProfileDropdownOpen = false
let isCreatingProfile = false

function renderProfileSwitcher() {
  const state = appStore.getState()
  const activeProfile = appStore.getActiveProfile()
  const container = document.getElementById("profile-selector-dropdown-wrapper")
  container.innerHTML = ""

  // 1. Footer Switcher Button trigger
  const mainBtn = document.createElement("button")
  mainBtn.type = "button"
  mainBtn.className =
    "flex items-center gap-3 w-full p-2 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800/80 transition-all text-left cursor-pointer"

  mainBtn.innerHTML = `
    <div class="relative flex items-center justify-center w-8.5 h-8.5 rounded-full text-base shrink-0 border-2" style="border-color: ${
      activeProfile.color
    }">
      ${activeProfile.avatarUrl}
      <span class="absolute bottom-0 -right-0.5 flex h-3 w-3 items-center justify-center rounded-full bg-emerald-500 ring-2 ring-white dark:ring-slate-900">
        <span class="h-1 w-1 rounded-full bg-white"></span>
      </span>
    </div>
    <div class="flex-1 min-w-0">
      <div class="flex items-center gap-1">
        <span class="font-semibold text-slate-800 dark:text-slate-100 text-xs truncate max-w-[124px]">${
          activeProfile.name
        }</span>
        ${
          activeProfile.role === "Admin"
            ? `<span class="text-[9px] uppercase font-bold text-rose-500 bg-rose-50 dark:bg-rose-950/35 dark:border-rose-900 px-1 rounded border border-rose-100">Admin</span>`
            : ""
        }
        ${
          activeProfile.role === "Moderator"
            ? `<span class="text-[9px] uppercase font-bold text-amber-500 bg-amber-50 dark:bg-amber-950/35 px-1 rounded border border-amber-100">Mod</span>`
            : ""
        }
      </div>
      <p class="text-[10px] text-slate-400 truncate mt-0.5">${
        activeProfile.role
      } ${activeProfile.bio ? `• ${activeProfile.bio}` : ""}</p>
    </div>
  `

  mainBtn.onclick = e => {
    e.stopPropagation()
    isProfileDropdownOpen = !isProfileDropdownOpen
    isCreatingProfile = false
    renderProfileSwitcher()
  }

  container.appendChild(mainBtn)

  if (isProfileDropdownOpen) {
    // Backdrop close guard
    const backdrop = document.createElement("div")
    backdrop.className = "fixed inset-0 z-40"
    backdrop.onclick = e => {
      e.stopPropagation()
      isProfileDropdownOpen = false
      isCreatingProfile = false
      renderProfileSwitcher()
    }
    document.body.appendChild(backdrop)

    // Dropdown Container
    const dropdown = document.createElement("div")
    dropdown.className =
      "absolute left-4 bottom-18 w-72 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl shadow-2xl z-50 overflow-hidden max-h-[380px] flex flex-col scale-100 animate-fadeIn"

    // Header
    const dropdownHeader = document.createElement("div")
    dropdownHeader.className =
      "p-3 bg-slate-50 dark:bg-slate-900/50 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between shrink-0"
    dropdownHeader.innerHTML = `
      <span class="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Browsing Profiles</span>
      ${
        !isCreatingProfile
          ? `
        <button id="add-profile-inline-btn" class="text-[10px] font-bold px-2 py-1 bg-indigo-650 text-white rounded hover:bg-indigo-700 cursor-pointer flex items-center gap-0.5">
          ${getIconSvg("Plus", "w-3 h-3")} <span>Add</span>
        </button>
      `
          : ""
      }
    `

    // Dropdown Header switch logic
    dropdownHeader.onclick = e => {
      const target = e.target
      if (target.closest("#add-profile-inline-btn")) {
        isCreatingProfile = true
        renderProfileSwitcher()
      }
    }
    dropdown.appendChild(dropdownHeader)

    // Dynamic Panel Body (Switcher selection OR Profile input fields form)
    const bodyPanel = document.createElement("div")
    bodyPanel.className = "p-3 overflow-y-auto flex-1"

    if (isCreatingProfile) {
      // Create profile form template
      bodyPanel.innerHTML = `
        <form id="dropdown-new-profile-form" class="space-y-3">
          <div class="flex items-center justify-between">
            <span class="text-xs font-semibold text-slate-700 dark:text-slate-300">Create Identity</span>
            <button type="button" id="cancel-create-profile-btn" class="text-xs text-slate-400 hover:text-slate-600 dark:hover:text-slate-200">Cancel</button>
          </div>
          <div>
            <label class="block text-[9px] font-bold text-slate-400 uppercase tracking-widest mb-1">Handle Name</label>
            <input type="text" id="new-p-name" class="w-full text-xs px-2.5 py-1.5 border border-slate-200 rounded-lg bg-slate-50 dark:bg-slate-950 dark:border-slate-800 dark:text-slate-100 focus:outline-none" required maxlength="18" placeholder="e.g. Reese Finch">
          </div>
          <div class="grid grid-cols-2 gap-2">
            <div>
              <label class="block text-[9px] font-bold text-slate-400 uppercase tracking-widest mb-1">Board Role</label>
              <select id="new-p-role" class="w-full text-[11px] px-2 py-1 rounded border bg-slate-50 dark:bg-slate-950 dark:border-slate-800 dark:text-slate-100 focus:outline-none">
                <option value="Member">Member</option>
                <option value="Moderator">Moderator</option>
                <option value="Admin">Admin</option>
              </select>
            </div>
            <div>
              <label class="block text-[9px] font-bold text-slate-400 uppercase tracking-widest mb-1">Profile Color</label>
              <div class="flex items-center gap-1.5">
                <input type="color" id="new-p-color" value="#8b5cf6" class="w-6 h-6 rounded border-0 cursor-pointer">
                <span id="new-p-color-hex" class="text-[10px] font-mono font-medium uppercase text-slate-400">#8B5CF6</span>
              </div>
            </div>
          </div>
          <div>
            <label class="block text-[9px] font-bold text-slate-400 uppercase tracking-widest mb-1">Short Bio</label>
            <input type="text" id="new-p-bio" class="w-full text-xs px-2.5 py-1.5 border border-slate-200 rounded-lg bg-slate-50 dark:bg-slate-950 dark:border-slate-800 dark:text-slate-100 focus:outline-none" maxlength="60" placeholder="A brief word about this alias...">
          </div>
          <div>
            <label class="block text-[9px] font-bold text-slate-400 uppercase tracking-widest mb-1">Avatar Preset</label>
            <div class="grid grid-cols-6 gap-1 p-1 bg-slate-50 dark:bg-slate-950 rounded border dark:border-slate-800 max-h-16 overflow-y-auto" id="new-p-avatars">
              <!-- Inline injectors -->
            </div>
          </div>
          <button type="submit" class="w-full text-xs py-1.5 bg-indigo-650 hover:bg-indigo-700 text-white rounded-lg font-medium cursor-pointer">Add Profile</button>
        </form>
      `

      // Fill in emojis
      const emojis = [
        "😊",
        "😺",
        "🦊",
        "🐻",
        "🐼",
        "🐯",
        "🦁",
        "🐸",
        "🚀",
        "🎨",
        "💻",
        "🎮"
      ]
      let selectedAvatar = "😊"
      const avatarGrid = bodyPanel.querySelector("#new-p-avatars")

      const renderAvatarGrid = () => {
        avatarGrid.innerHTML = ""
        emojis.forEach(emo => {
          const btn = document.createElement("button")
          btn.type = "button"
          btn.className = `flex items-center justify-center p-1 rounded hover:bg-white dark:hover:bg-slate-900 border text-sm transition-all cursor-pointer ${
            selectedAvatar === emo
              ? "bg-white dark:bg-slate-900 ring-1 ring-indigo-500 scale-105"
              : "border-transparent"
          }`
          btn.innerText = emo
          btn.onclick = () => {
            selectedAvatar = emo
            renderAvatarGrid()
          }
          avatarGrid.appendChild(btn)
        })
      }
      renderAvatarGrid()

      // Bind color changes
      const colorInput = bodyPanel.querySelector("#new-p-color")
      const colorHexVal = bodyPanel.querySelector("#new-p-color-hex")
      colorInput.oninput = () => {
        colorHexVal.textContent = colorInput.value.toUpperCase()
      }

      // Form trigger
      const form = bodyPanel.querySelector("#dropdown-new-profile-form")
      form.onsubmit = e => {
        e.preventDefault()
        const pName = bodyPanel.querySelector("#new-p-name").value.trim()
        const pRole = bodyPanel.querySelector("#new-p-role").value
        const pColor = colorInput.value
        const pBio = bodyPanel.querySelector("#new-p-bio").value.trim()

        if (!pName) return

        const newProfile = {
          id: `p-${Date.now()}`,
          name: pName,
          avatarUrl: selectedAvatar,
          color: pColor,
          role: pRole,
          bio: pBio || undefined,
          createdAt: new Date().toISOString()
        }

        appStore.updateState(prev => ({
          ...prev,
          profiles: [...prev.profiles, newProfile],
          activeProfileId: newProfile.id
        }))

        isCreatingProfile = false
        isProfileDropdownOpen = false
        backdrop.remove()
        renderAll()
      }

      // Cancel button
      const cancelBtn = bodyPanel.querySelector("#cancel-create-profile-btn")
      cancelBtn.onclick = () => {
        isCreatingProfile = false
        renderProfileSwitcher()
      }
    } else {
      // Browse active profiles list selection
      const listContainer = document.createElement("div")
      listContainer.className = "space-y-1"

      state.profiles.forEach(p => {
        const isSelected = p.id === state.activeProfileId
        const row = document.createElement("button")
        row.type = "button"
        row.className = `w-full flex items-center justify-between p-2 rounded-xl text-left cursor-pointer transition-all ${
          isSelected
            ? "bg-slate-150/70 dark:bg-slate-800 ring-1 ring-slate-200 dark:ring-slate-700"
            : "hover:bg-slate-50 dark:hover:bg-slate-850/60"
        }`

        row.innerHTML = `
          <div class="flex items-center gap-2.5 min-w-0">
            <div class="flex items-center justify-center w-7.5 h-7.5 rounded-full text-sm shrink-0 border" style="border-color: ${
              p.color
            }">
              ${p.avatarUrl}
            </div>
            <div class="flex-1 min-w-0">
              <div class="flex items-center gap-1">
                <span class="text-xs font-semibold text-slate-700 dark:text-slate-200 truncate max-w-[120px]">${
                  p.name
                }</span>
                ${
                  p.role === "Admin"
                    ? `<span class="text-[8px] bg-rose-50 text-rose-500 font-bold px-1 rounded uppercase">Admin</span>`
                    : ""
                }
                ${
                  p.role === "Moderator"
                    ? `<span class="text-[8px] bg-amber-50 text-amber-500 font-bold px-1 rounded uppercase">Mod</span>`
                    : ""
                }
              </div>
              <p class="text-[9px] text-slate-400 mt-0.5 truncate">${p.bio ||
                p.role}</p>
            </div>
          </div>
          ${
            isSelected
              ? `<div class="text-indigo-650">${getIconSvg(
                  "Check",
                  "w-4 h-4"
                )}</div>`
              : ""
          }
        `

        row.onclick = () => {
          appStore.updateState(prev => ({ ...prev, activeProfileId: p.id }))
          isProfileDropdownOpen = false
          backdrop.remove()
          renderAll()
        }

        listContainer.appendChild(row)
      })

      bodyPanel.appendChild(listContainer)
    }

    dropdown.appendChild(bodyPanel)

    // Switcher footprint note
    const dropdownFooter = document.createElement("div")
    dropdownFooter.className =
      "p-2 bg-slate-50 dark:bg-slate-900 border-t border-slate-100 dark:border-slate-800 text-center shrink-0"
    dropdownFooter.innerHTML = `<span class="text-[9px] text-slate-400">LocalStorage Encrypted State Cache</span>`
    dropdown.appendChild(dropdownFooter)

    container.appendChild(dropdown)
  }
}

// Draw Active board header, labels, description
function renderBoardHeader() {
  const activeBoard = appStore.getActiveBoard()

  // Custom board icon svg
  const iconBox = document.getElementById("board-header-icon")
  iconBox.innerHTML = getIconSvg(
    activeBoard.icon,
    "w-5 h-5 text-[var(--board-primary)]"
  )

  // Inline inputs
  const editTitleBtn = document.getElementById("edit-board-btn")
  const hTitle = document.getElementById("board-header-title")
  const hDesc = document.getElementById("board-header-desc")
  const inlineForm = document.getElementById("board-inline-edit-form")

  if (isEditingActiveBoard) {
    hTitle.classList.add("hidden")
    hDesc.classList.add("hidden")
    editTitleBtn.classList.add("hidden")
    inlineForm.classList.remove("hidden")

    const nameInput = document.getElementById("board-edit-name-input")
    const descInput = document.getElementById("board-edit-desc-input")

    nameInput.value = activeBoard.name
    descInput.value = activeBoard.description
    nameInput.focus()
  } else {
    hTitle.classList.remove("hidden")
    hDesc.classList.remove("hidden")
    editTitleBtn.classList.remove("hidden")
    inlineForm.classList.add("hidden")

    hTitle.innerText = activeBoard.name
    hDesc.innerText = activeBoard.description
    const mobTitle = document.getElementById("mobile-board-title")
    mobTitle.innerText = activeBoard.name
  }
}

// Draw messages list feed with details
function renderMessagesStream() {
  const state = appStore.getState()
  const activeBoard = appStore.getActiveBoard()
  const activeProfile = appStore.getActiveProfile()
  const activeTheme = appStore.getBoardTheme(activeBoard)
  const container = document.getElementById("board-messages-container")
  container.innerHTML = ""

  // Filter messages based on search query
  let messages = state.messages.filter(m => m.boardId === activeBoard.id)

  if (searchQuery.trim()) {
    const q = searchQuery.toLowerCase().trim()
    messages = messages.filter(m => {
      const author = state.profiles.find(p => p.id === m.profileId)
      const matchesContent = m.content.toLowerCase().includes(q)
      const matchesAuthor = author
        ? author.name.toLowerCase().includes(q)
        : false
      const matchesReplies = m.replies.some(r => {
        const replyAuthor = state.profiles.find(p => p.id === r.profileId)
        return (
          r.content.toLowerCase().includes(q) ||
          (replyAuthor ? replyAuthor.name.toLowerCase().includes(q) : false)
        )
      })
      return matchesContent || matchesAuthor || matchesReplies
    })

    const searchHint = document.getElementById("search-indicators")
    const clearBtn = document.getElementById("clear-search-btn")
    searchHint.classList.remove("hidden")
    clearBtn.classList.remove("hidden")
    searchHint.innerText = `Found ${messages.length} matches`
  } else {
    const searchHint = document.getElementById("search-indicators")
    const clearBtn = document.getElementById("clear-search-btn")
    searchHint.classList.add("hidden")
    clearBtn.classList.add("hidden")
  }

  // Handle board chronological order configuration
  if (state.settings.messageOrdering === "newest") {
    messages.sort(
      (a, b) =>
        new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
    )
  } else {
    messages.sort(
      (a, b) =>
        new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
    )
  }

  // Pinned posts always bubble gracefully to top
  const pinnedList = messages.filter(m => m.isPinned)
  const unpinnedList = messages.filter(m => !m.isPinned)
  const finalMessages = [...pinnedList, ...unpinnedList]

  if (finalMessages.length === 0) {
    // Empty stream state
    const emptyBox = document.createElement("div")
    emptyBox.className =
      "py-16 text-center text-slate-405 dark:text-slate-500 space-y-3"
    emptyBox.innerHTML = `
      <div class="mx-auto w-12 h-12 rounded-full border border-slate-200 dark:border-slate-805 flex items-center justify-center bg-white dark:bg-slate-900 text-slate-400">
        ${getIconSvg("MessageSquare", "w-5 h-5")}
      </div>
      <p class="text-xs font-medium">This local board stream is clear.</p>
    `
    container.appendChild(emptyBox)
    return
  }

  // Draw card items
  finalMessages.forEach(msg => {
    const author = state.profiles.find(p => p.id === msg.profileId) || {
      id: "unknown",
      name: "Anonymous",
      avatarUrl: "👤",
      color: "#94a3b8",
      role: "Member"
    }

    const isOurPost = msg.profileId === activeProfile.id
    const isAdmin = activeProfile.role === "Admin"
    const isMod = activeProfile.role === "Moderator"
    const hasWritePermission = isOurPost || isAdmin || isMod

    const densityClass =
      state.settings.density === "compact" ? "p-3.5 space-y-2" : "p-5 space-y-4"

    const card = document.createElement("div")
    card.className = `relative rounded-2xl border transition-all shadow-custom hover:shadow-active bg-[var(--board-card)] border-[var(--board-border)] ${densityClass}`

    // Apply dataset helper
    card.dataset.id = msg.id

    // Pin badge
    let pinBadge = ""
    if (msg.isPinned) {
      pinBadge = `
        <div class="absolute right-4 top-0 -translate-y-1/2 flex items-center gap-1 px-2 py-0.5 rounded-full text-[9px] font-bold text-white bg-[var(--board-primary)] uppercase tracking-wider">
          Pin
        </div>
      `
    }

    // Role badge mapping code
    let roleBadge = ""
    if (author.role === "Admin") {
      roleBadge = `<span class="px-1 py-0.5 text-[8px] font-bold uppercase tracking-wide rounded bg-rose-50 text-rose-500 border border-rose-100 max-h-[16px]">Admin</span>`
    } else if (author.role === "Moderator") {
      roleBadge = `<span class="px-1 py-0.5 text-[8px] font-bold uppercase tracking-wide rounded bg-amber-50 text-amber-500 border border-amber-100 max-h-[16px]">Mod</span>`
    }

    // Checking edit modes inline
    const isEditing = editingMessageId === msg.id
    let mainPostContent = ""

    if (isEditing) {
      mainPostContent = `
        <div class="space-y-3 pt-1">
          <textarea id="edit-msg-textarea-${
            msg.id
          }" class="w-full text-xs px-3 py-2 rounded-xl border dark:bg-slate-900 border-indigo-500 focus:outline-none dark:text-slate-100 resize-none" rows="3">${
        msg.content
      }</textarea>
          <div class="relative">
            <input type="url" id="edit-msg-media-${
              msg.id
            }" class="w-full pl-7.5 pr-3 py-1.5 rounded-lg border dark:bg-slate-900 text-xs focus:outline-none" placeholder="Update media link or image URL..." value="${msg.mediaUrl ||
        ""}">
            <span class="absolute inset-y-0 left-0 pl-2.5 flex items-center text-slate-400">${getIconSvg(
              "Link",
              "w-3.5 h-3.5"
            )}</span>
          </div>
          <div class="flex justify-end gap-2 text-xs">
            <button type="button" class="px-3 py-1 border rounded-lg text-slate-500 hover:bg-slate-50 cursor-pointer cancel-edit-post-btn">Cancel</button>
            <button type="button" class="px-3.5 py-1 bg-indigo-650 text-white font-semibold rounded-lg hover:bg-indigo-700 cursor-pointer save-edit-post-btn">Save</button>
          </div>
        </div>
      `
    } else {
      // Content plus Media Renderers
      let mediaMarkup = ""
      if (msg.mediaUrl) {
        const isImage =
          msg.mediaUrl.match(/\.(jpeg|jpg|gif|png|webp|svg)$/i) ||
          msg.mediaUrl.includes("images") ||
          msg.mediaUrl.includes("unsplash")
        if (isImage) {
          mediaMarkup = `
            <div class="mt-3.5 max-h-[300px] rounded-xl overflow-hidden border border-slate-100 dark:border-slate-800 bg-slate-50 dark:bg-slate-950/40 relative">
              <a href="${msg.mediaUrl}" target="_blank" rel="noopener noreferrer">
                <img src="${msg.mediaUrl}" alt="Attachment preview" class="w-full max-h-[300px] object-cover hover:scale-[1.01] transition-transform" referrerpolicy="no-referrer">
              </a>
            </div>
          `
        } else {
          mediaMarkup = `
            <a href="${
              msg.mediaUrl
            }" target="_blank" rel="noopener noreferrer" class="mt-2.5 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-slate-200 dark:border-slate-800 text-xs text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 font-medium transition-colors bg-slate-50/50 dark:bg-slate-900/40">
              ${getIconSvg("Link", "w-3.5 h-3.5")}
              <span class="truncate max-w-xs">${msg.mediaUrl}</span>
            </a>
          `
        }
      }

      mainPostContent = `
        <div class="text-xs text-[var(--board-text)] leading-relaxed font-sans pr-1">
          ${parseMarkdownToHtml(msg.content)}
        </div>
        ${mediaMarkup}
      `
    }

    // Reaction Chips Generator
    let reactionsRow = ""
    if (
      state.settings.allowReactions &&
      msg.reactions &&
      msg.reactions.length > 0
    ) {
      reactionsRow = `<div class="flex flex-wrap gap-1.5 mt-4">`
      msg.reactions.forEach(react => {
        const weReacted = react.profileIds.includes(activeProfile.id)
        const borderClass = weReacted
          ? "border-indigo-500 bg-indigo-50/50 dark:bg-indigo-950/20 text-indigo-600 dark:text-indigo-400"
          : "border-[var(--board-border)] text-slate-500 hover:bg-slate-50 dark:hover:bg-slate-850"
        reactionsRow += `
          <button type="button" class="reaction-chip flex items-center gap-1 px-2.5 py-0.5 rounded-full border text-[11px] font-semibold cursor-pointer transition-all ${borderClass}" data-emoji="${react.emoji}">
            <span>${react.emoji}</span>
            <span class="text-[10px] opacity-90">${react.profileIds.length}</span>
          </button>
        `
      })
      reactionsRow += `</div>`
    }

    // Nested Replies Generator
    let repliesBlock = ""
    if (state.settings.allowReplies) {
      const count = msg.replies ? msg.replies.length : 0

      repliesBlock += `
        <div class="mt-4 border-t border-[var(--board-border)] pt-4 space-y-4">
          <div class="flex items-center justify-between">
            <span class="text-[10px] font-bold text-slate-400 uppercase tracking-widest flex items-center gap-1">
              ${getIconSvg("MessageSquare", "w-3 h-3")}
              <span>Comments (${count})</span>
            </span>
            <button type="button" class="toggle-reply-composer-btn text-[10px] font-semibold text-indigo-600 dark:text-indigo-400 hover:underline cursor-pointer">
              Write Comment
            </button>
          </div>
      `

      // Comments list inside post card
      if (count > 0) {
        repliesBlock += `<div class="space-y-3 max-h-48 overflow-y-auto pr-1">`
        msg.replies.forEach(rep => {
          const rAuthor = state.profiles.find(p => p.id === rep.profileId) || {
            name: "Anonymous",
            avatarUrl: "👤",
            color: "#94a3b8",
            role: "Member"
          }

          const isOurComment = rep.profileId === activeProfile.id
          const canDeleteComment = isOurComment || isAdmin || isMod

          repliesBlock += `
            <div class="flex items-start gap-2.5 p-2 rounded-xl bg-slate-50/70 dark:bg-slate-900/40 border border-slate-100 dark:border-slate-800">
              <div class="flex items-center justify-center w-6 h-6 rounded-full text-xs border" style="border-color: ${
                rAuthor.color
              }">
                ${rAuthor.avatarUrl}
              </div>
              <div class="flex-1 min-w-0 space-y-0.5">
                <div class="flex items-center justify-between">
                  <div class="flex items-center gap-1.5 flex-wrap">
                    <span class="text-[11px] font-bold text-slate-700 dark:text-slate-200">${
                      rAuthor.name
                    }</span>
                    ${
                      rAuthor.role === "Admin"
                        ? `<span class="text-[7.5px] uppercase font-semibold text-rose-500 px-1 rounded-sm bg-rose-50 border border-rose-100 scale-95">Admin</span>`
                        : ""
                    }
                    ${
                      rAuthor.role === "Moderator"
                        ? `<span class="text-[7.5px] uppercase font-semibold text-amber-500 px-1 rounded-sm bg-amber-50 border border-amber-100 scale-95">Mod</span>`
                        : ""
                    }
                    <span class="text-[9px] text-slate-400">• ${formatDate(
                      rep.createdAt
                    )}</span>
                  </div>

                  ${
                    canDeleteComment
                      ? `
                    <button type="button" class="delete-reply-btn p-1 text-slate-400 hover:text-rose-500 rounded cursor-pointer" data-reply-id="${
                      rep.id
                    }" title="Delete Comment">
                      ${getIconSvg("X", "w-3 h-3")}
                    </button>
                  `
                      : ""
                  }
                </div>
                <p class="text-[11px] text-slate-600 dark:text-slate-350 leading-relaxed">${
                  rep.content
                }</p>
              </div>
            </div>
          `
        })
        repliesBlock += `</div>`
      }

      // Inline comment submission composer
      repliesBlock += `
        <form class="nested-reply-form hidden pt-2 flex gap-2">
          <input type="text" placeholder="Write a peaceful local comment..." class="reply-text-field flex-1 text-xs px-3 py-1.5 rounded-lg border dark:bg-slate-950 border-slate-200 dark:border-slate-800 dark:text-slate-100 focus:outline-none focus:border-indigo-500" required maxlength="120">
          <button type="submit" class="px-3 py-1.5 bg-indigo-650 hover:bg-indigo-700 text-white rounded-lg text-xs font-semibold cursor-pointer">Post</button>
        </form>
      `

      repliesBlock += `</div>`
    }

    // Build actions header toolbar (Pins, Edits, Deletes)
    let topToolbar = ""
    if (hasWritePermission) {
      topToolbar += `<div class="flex items-center gap-1.5">`

      // Pin messaging permission for admins and moderators
      if (isAdmin || isMod) {
        topToolbar += `
          <button type="button" class="pin-post-btn p-1 text-slate-400 hover:text-amber-500 rounded cursor-pointer transition-colors ${
            msg.isPinned ? "text-amber-500" : ""
          }" title="${msg.isPinned ? "Unpin message" : "Pin message"}">
            ${getIconSvg("Pin", "w-4 h-4")}
          </button>
        `
      }

      // Basic update edit options
      if (isOurPost || isAdmin || isMod) {
        topToolbar += `
          <button type="button" class="edit-post-btn p-1 text-slate-400 hover:text-indigo-500 rounded cursor-pointer transition-colors" title="Edit local post">
            ${getIconSvg("Edit3", "w-4 h-4")}
          </button>
          <button type="button" class="delete-post-btn p-1 text-slate-400 hover:text-rose-650 dark:hover:text-rose-450 rounded cursor-pointer transition-colors" title="Delete post">
            ${getIconSvg("Trash2", "w-4 h-4")}
          </button>
        `
      }

      topToolbar += `</div>`
    }

    // Combine inner layouts
    card.innerHTML = `
      ${pinBadge}
      
      <!-- Top header line -->
      <div class="flex items-start justify-between gap-3 shrink-0">
        <div class="flex items-center gap-2.5 min-w-0">
          <div class="flex items-center justify-center w-9 h-9 rounded-full text-base shrink-0 border-2" style="border-color: ${
            author.color
          };">
            ${author.avatarUrl}
          </div>
          <div class="flex-1 min-w-0 space-y-0.5">
            <div class="flex items-center gap-1.5 flex-wrap">
              <span class="font-semibold text-slate-800 dark:text-slate-100 text-[13px] truncate">${
                author.name
              }</span>
              ${roleBadge}
            </div>
            <p class="text-[10px] text-slate-400 flex items-center gap-1">
              ${getIconSvg("Clock", "w-3 h-3")}
              <span>${formatDate(msg.createdAt)}</span>
              ${
                msg.editedAt
                  ? `<span class="italic text-slate-350 dark:text-slate-500">(edited ${formatDate(
                      msg.editedAt
                    )})</span>`
                  : ""
              }
            </p>
          </div>
        </div>

        ${topToolbar}
      </div>

      <!-- Center content -->
      ${mainPostContent}

      <!-- Quick Reaction Picker (Smile icon block that reveals dynamic panel) -->
      ${
        state.settings.allowReactions
          ? `
        <div class="pt-1.5 flex items-center gap-2">
          <div class="relative inline-block emoji-picker-host">
            <button type="button" class="trigger-picker-btn p-1 text-slate-400 hover:text-slate-650 dark:hover:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-850 rounded-lg cursor-pointer transition-all" title="Add reaction">
              <svg class="w-4 h-4 text-slate-500" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M14.828 14.828a4 4 0 0 1-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0z"/></svg>
            </button>
            <div class="absolute left-0 bottom-7 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-1.5 rounded-xl shadow-xl z-10 hidden flex gap-1 animate-fadeIn shrink-0">
              ${["👍", "❤️", "🔥", "🚀", "👀", "✨", "😂", "💡"]
                .map(
                  emo => `
                <button type="button" class="emoji-picker-item hover:bg-slate-100 dark:hover:bg-slate-800 p-1 rounded text-sm cursor-pointer">${emo}</button>
              `
                )
                .join("")}
            </div>
          </div>
          ${reactionsRow}
        </div>
      `
          : ""
      }

      <!-- Comments list section block -->
      ${repliesBlock}
    `

    // Attaching card listeners
    const triggerBtn = card.querySelector(".trigger-picker-btn")
    const pickerPanel = card
      .querySelector(".emoji-picker-host")
      ?.querySelector("div")

    // Toggle reaction picker panel
    if (triggerBtn) {
      triggerBtn.onclick = e => {
        e.stopPropagation()
        // Close other pickers
        document.querySelectorAll(".emoji-picker-host div").forEach(div => {
          if (div !== pickerPanel) div.classList.add("hidden")
        })
        pickerPanel.classList.toggle("hidden")
      }
    }

    // Add emoji clicks
    card.querySelectorAll(".emoji-picker-item").forEach(item => {
      const el = item
      el.onclick = e => {
        e.stopPropagation()
        const emoji = el.innerText
        handleAddReaction(msg.id, emoji)
        pickerPanel.classList.add("hidden")
      }
    })

    // Reaction chip click toggles
    card.querySelectorAll(".reaction-chip").forEach(chip => {
      const el = chip
      el.onclick = () => {
        const emoji = el.dataset.emoji || ""
        handleAddReaction(msg.id, emoji)
      }
    })

    // Delete post
    const deleteBtn = card.querySelector(".delete-post-btn")
    if (deleteBtn) {
      deleteBtn.onclick = () => {
        if (confirm("Are you absolutely sure you want to delete this post?")) {
          appStore.updateState(prev => ({
            ...prev,
            messages: prev.messages.filter(m => m.id !== msg.id)
          }))
          renderAll()
        }
      }
    }

    // Edit post toggler
    const editBtn = card.querySelector(".edit-post-btn")
    if (editBtn) {
      editBtn.onclick = () => {
        editingMessageId = editingMessageId === msg.id ? null : msg.id
        renderAll()
      }
    }

    // Save editted content
    const saveEditBtn = card.querySelector(".save-edit-post-btn")
    if (saveEditBtn) {
      saveEditBtn.onclick = () => {
        const newText = card
          .querySelector(`#edit-msg-textarea-${msg.id}`)
          .value.trim()
        const newMedia = card
          .querySelector(`#edit-msg-media-${msg.id}`)
          .value.trim()
        if (!newText) {
          alert("Message cannot be empty!")
          return
        }
        appStore.updateState(prev => ({
          ...prev,
          messages: prev.messages.map(m =>
            m.id === msg.id
              ? {
                  ...m,
                  content: newText,
                  mediaUrl: newMedia || undefined,
                  editedAt: new Date().toISOString()
                }
              : m
          )
        }))
        editingMessageId = null
        renderAll()
      }
    }

    // Cancel edit post
    const cancelEditBtn = card.querySelector(".cancel-edit-post-btn")
    if (cancelEditBtn) {
      cancelEditBtn.onclick = () => {
        editingMessageId = null
        renderAll()
      }
    }

    // Pin post toggler
    const pinBtn = card.querySelector(".pin-post-btn")
    if (pinBtn) {
      pinBtn.onclick = () => {
        const isCurrentlyPinned =
          activeBoard.pinnedMessageIds?.includes(msg.id) || false

        appStore.updateState(prev => {
          const updatedBoards = prev.boards.map(b => {
            if (b.id !== activeBoard.id) return b
            const pins = b.pinnedMessageIds || []
            return {
              ...b,
              pinnedMessageIds: isCurrentlyPinned
                ? pins.filter(id => id !== msg.id)
                : [...pins, msg.id]
            }
          })

          const updatedMsgs = prev.messages.map(m => {
            if (m.id === msg.id) return { ...m, isPinned: !isCurrentlyPinned }
            return m
          })

          return {
            ...prev,
            boards: updatedBoards,
            messages: updatedMsgs
          }
        })

        renderAll()
      }
    }

    // Toggle reply comment form
    const triggerReplyFormBtn = card.querySelector(".toggle-reply-composer-btn")
    const replyForm = card.querySelector(".nested-reply-form")
    if (triggerReplyFormBtn && replyForm) {
      triggerReplyFormBtn.onclick = () => {
        replyForm.classList.toggle("hidden")
        if (!replyForm.classList.contains("hidden")) {
          replyForm.querySelector("input")?.focus()
        }
      }
    }

    // Post comments submit
    if (replyForm) {
      replyForm.onsubmit = e => {
        e.preventDefault()
        const replyField = replyForm.querySelector(".reply-text-field")
        const commentText = replyField.value.trim()
        if (!commentText) return

        const newCommentReply = {
          id: `r-${Date.now()}`,
          profileId: activeProfile.id,
          content: commentText,
          createdAt: new Date().toISOString()
        }

        appStore.updateState(prev => ({
          ...prev,
          messages: prev.messages.map(m =>
            m.id === msg.id
              ? { ...m, replies: [...(m.replies || []), newCommentReply] }
              : m
          )
        }))

        replyField.value = ""
        replyForm.classList.add("hidden")
        renderAll()
      }
    }

    // Delete comments nested under posts
    card.querySelectorAll(".delete-reply-btn").forEach(delRep => {
      const el = delRep
      el.onclick = () => {
        const replyId = el.dataset.replyId || ""
        if (confirm("Delete this nested comment?")) {
          appStore.updateState(prev => ({
            ...prev,
            messages: prev.messages.map(m => {
              if (m.id !== msg.id) return m
              return {
                ...m,
                replies: (m.replies || []).filter(r => r.id !== replyId)
              }
            })
          }))
          renderAll()
        }
      }
    })

    container.appendChild(card)
  })
}

// Hanlde reactions logic helper
function handleAddReaction(messageId, emoji) {
  const activeProfile = appStore.getActiveProfile()

  appStore.updateState(prev => ({
    ...prev,
    messages: prev.messages.map(m => {
      if (m.id !== messageId) return m

      let reactions = [...(m.reactions || [])]
      const target = reactions.find(r => r.emoji === emoji)

      if (target) {
        if (target.profileIds.includes(activeProfile.id)) {
          target.profileIds = target.profileIds.filter(
            id => id !== activeProfile.id
          )
        } else {
          target.profileIds.push(activeProfile.id)
        }
      } else {
        reactions.push({
          emoji,
          profileIds: [activeProfile.id]
        })
      }

      // Filter empty list
      reactions = reactions.filter(r => r.profileIds.length > 0)

      return {
        ...m,
        reactions
      }
    })
  }))

  renderAll()
}

// Draw composer bar inputs & values
function renderComposerBar() {
  const activeProfile = appStore.getActiveProfile()

  // Set avatar preview
  const prev = document.getElementById("composer-avatar-preview")
  prev.innerText = activeProfile.avatarUrl
  prev.style.borderColor = activeProfile.color

  // Restore current media attachment state
  const wrapper = document.getElementById("composer-media-input-wrapper")
  const input = document.getElementById("composer-media-url-input")

  if (activeImageLink) {
    wrapper.classList.remove("hidden")
    input.value = activeImageLink
  } else {
    wrapper.classList.add("hidden")
    input.value = ""
  }
}

// Complete modal form options (pickers, presets)
function renderThemeColorsInForm() {
  const activeBoard = appStore.getActiveBoard()
  const theme = appStore.getBoardTheme(activeBoard)

  const colPrimary = document.getElementById("theme-col-primary")
  const colSecondary = document.getElementById("theme-col-secondary")
  const colBg = document.getElementById("theme-col-bg")
  const colCard = document.getElementById("theme-col-card")
  const colText = document.getElementById("theme-col-text")
  const colBorder = document.getElementById("theme-col-border")

  const textPrimary = document.getElementById("theme-text-primary")
  const textSecondary = document.getElementById("theme-text-secondary")
  const textBg = document.getElementById("theme-text-bg")
  const textCard = document.getElementById("theme-text-card")
  const textText = document.getElementById("theme-text-text")
  const textBorder = document.getElementById("theme-text-border")

  const isDarkCheck = document.getElementById("theme-is-dark")

  // Set hex inputs
  colPrimary.value = theme.primary
  colSecondary.value = theme.secondary
  colBg.value = theme.background
  colCard.value = theme.card
  colText.value = theme.text
  colBorder.value = theme.border

  textPrimary.value = theme.primary
  textSecondary.value = theme.secondary
  textBg.value = theme.background
  textCard.value = theme.card
  textText.value = theme.text
  textBorder.value = theme.border

  isDarkCheck.checked = theme.isDark

  // Render presets
  const presetsGrid = document.getElementById("theme-modal-presets")
  presetsGrid.innerHTML = ""

  DEFAULT_THEMES.forEach(preset => {
    const btn = document.createElement("button")
    btn.type = "button"
    btn.className = `p-1.5 rounded-lg border text-[11px] font-medium text-left flex items-center justify-between cursor-pointer hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors ${
      activePalettePresetId === preset.id
        ? "border-indigo-500 bg-indigo-50/20"
        : "border-slate-100 dark:border-slate-850"
    }`
    btn.innerHTML = `
      <span>${preset.name}</span>
      <div class="flex gap-0.5 items-center">
        <span class="w-2.5 h-2.5 rounded-full" style="background-color: ${preset.primary};"></span>
        <span class="w-2.5 h-2.5 rounded-full" style="background-color: ${preset.background};"></span>
      </div>
    `

    btn.onclick = () => {
      activePalettePresetId = preset.id
      // Trigger instant pick update
      colPrimary.value = preset.primary
      colSecondary.value = preset.secondary
      colBg.value = preset.background
      colCard.value = preset.card
      colText.value = preset.text
      colBorder.value = preset.border
      isDarkCheck.checked = preset.isDark

      // propagate inline inputs
      textPrimary.value = preset.primary
      textSecondary.value = preset.secondary
      textBg.value = preset.background
      textCard.value = preset.card
      textText.value = preset.text
      textBorder.value = preset.border

      updateLiveThemePreview()
      renderThemeColorsInForm()
    }

    presetsGrid.appendChild(btn)
  })

  updateLiveThemePreview()
}

// Modify Live Theme Preview dialog in real-time
function updateLiveThemePreview() {
  const colPrimary = document.getElementById("theme-col-primary")
  const colBg = document.getElementById("theme-col-bg")
  const colCard = document.getElementById("theme-col-card")
  const colText = document.getElementById("theme-col-text")
  const colBorder = document.getElementById("theme-col-border")

  const cardPreview = document.getElementById("theme-live-preview-card")
  const reactBox = document.getElementById("theme-preview-reaction-box")

  if (cardPreview) {
    cardPreview.style.backgroundColor = colCard.value
    cardPreview.style.borderColor = colBorder.value
    cardPreview.style.color = colText.value

    reactBox.style.borderColor = colBorder.value
    reactBox.style.backgroundColor = colBg.value
  }
}

// Load configurations modal settings value
function loadSettingsToModal() {
  const state = appStore.getState()

  const darkModeVal = document.getElementById("settings-dark-mode")
  const densityVal = document.getElementById("settings-density")
  const orderingVal = document.getElementById("settings-ordering")
  const allowRepliesVal = document.getElementById("settings-allow-replies")
  const allowReactionsVal = document.getElementById("settings-allow-reactions")

  darkModeVal.checked = state.settings.darkMode
  densityVal.value = state.settings.density
  orderingVal.value = state.settings.messageOrdering
  allowRepliesVal.checked = state.settings.allowReplies
  allowReactionsVal.checked = state.settings.allowReactions
}

// ================= GLOBAL EVENT LISTENERS BINDINGS =================

window.addEventListener("DOMContentLoaded", () => {
  // 1. Boot up application layout
  renderAll()

  // 2. Mobile Menu interactions
  const mobToggle = document.getElementById("mobile-menu-toggle")
  const sidebar = document.getElementById("sidebar")
  const overlay = document.getElementById("sidebar-overlay")
  const sidebarClose = document.getElementById("sidebar-close")

  const openMobileSidebar = () => {
    sidebar.classList.remove("-translate-x-full")
    overlay.classList.remove("hidden")
  }

  const closeMobileSidebar = () => {
    sidebar.classList.add("-translate-x-full")
    overlay.classList.add("hidden")
  }

  mobToggle.onclick = openMobileSidebar
  sidebarClose.onclick = closeMobileSidebar
  overlay.onclick = closeMobileSidebar

  // 3. Search inputs action
  const searchInput = document.getElementById("workspace-search-input")
  const clearSearch = document.getElementById("clear-search-btn")

  searchInput.oninput = () => {
    searchQuery = searchInput.value
    renderMessagesStream()
  }

  clearSearch.onclick = () => {
    searchInput.value = ""
    searchQuery = ""
    renderMessagesStream()
  }

  // 4. Board heading changes & inline form
  const hTitle = document.getElementById("board-header-title")
  const editBoardBtn = document.getElementById("edit-board-btn")
  const inlineCancel = document.getElementById("board-inline-cancel-btn")
  const inlineSave = document.getElementById("board-inline-save-btn")

  const activeProfile = appStore.getActiveProfile()

  const triggerInlineEditing = () => {
    const adminOrMod =
      activeProfile.role === "Admin" || activeProfile.role === "Moderator"
    if (!adminOrMod) {
      alert(
        "Only administrators and moderators are permitted to rewrite board meta tags!"
      )
      return
    }
    isEditingActiveBoard = true
    renderBoardHeader()
  }

  hTitle.onclick = triggerInlineEditing
  editBoardBtn.onclick = triggerInlineEditing

  inlineCancel.onclick = () => {
    isEditingActiveBoard = false
    renderBoardHeader()
  }

  inlineSave.onclick = () => {
    const activeBoard = appStore.getActiveBoard()
    const nameVal = document
      .getElementById("board-edit-name-input")
      .value.trim()
    const descVal = document
      .getElementById("board-edit-desc-input")
      .value.trim()

    if (!nameVal) {
      alert("Board name cannot be empty!")
      return
    }

    appStore.updateState(prev => ({
      ...prev,
      boards: prev.boards.map(b =>
        b.id === activeBoard.id
          ? {
              ...b,
              name: nameVal,
              description: descVal || "Custom local discussion board."
            }
          : b
      )
    }))

    isEditingActiveBoard = false
    renderAll()
  }

  // 5. composer attach triggers
  const photoAttachBtn = document.getElementById("composer-photo-attach-btn")
  const cancelAttachBtn = document.getElementById("composer-media-cancel-btn")
  const composerForm = document.getElementById("message-compose-form")

  photoAttachBtn.onclick = () => {
    const wrapper = document.getElementById("composer-media-input-wrapper")
    wrapper.classList.toggle("hidden")
    if (!wrapper.classList.contains("hidden")) {
      document.getElementById("composer-media-url-input")?.focus()
    }
  }

  cancelAttachBtn.onclick = () => {
    activeImageLink = ""
    renderComposerBar()
  }

  composerForm.onsubmit = e => {
    e.preventDefault()
    const textVal = document.getElementById("composer-text-area").value.trim()
    const rawMediaVal = document
      .getElementById("composer-media-url-input")
      .value.trim()

    if (!textVal) return

    const activeBoard = appStore.getActiveBoard()
    const activeProfile = appStore.getActiveProfile()

    const newMsg = {
      id: `m-${Date.now()}`,
      boardId: activeBoard.id,
      profileId: activeProfile.id,
      content: textVal,
      createdAt: new Date().toISOString(),
      reactions: [],
      replies: [],
      mediaUrl: rawMediaVal || undefined
    }

    appStore.updateState(prev => ({
      ...prev,
      messages: [newMsg, ...prev.messages]
    }))

    // Reset composer textarea
    document.getElementById("composer-text-area").value = ""
    activeImageLink = ""
    renderAll()

    // Scroll to new post safely
    setTimeout(() => {
      const scroller = document.getElementById("messages-scroller")
      if (scroller) scroller.scrollTop = 0
    }, 100)
  }

  // 6. Create board modal triggers
  const openNewBoardBtn = document.getElementById("create-board-trigger")
  const closeNewBoardBtn = document.getElementById("new-board-close-btn")
  const cancelNewBoardBtn = document.getElementById("new-board-cancel-btn")
  const newBoardForm = document.getElementById("new-board-form")
  const overlayNewBoard = document.getElementById("new-board-modal-overlay")

  const openNewBoardModal = () => {
    const activeProfile = appStore.getActiveProfile()
    const adminOrMod =
      activeProfile.role === "Admin" || activeProfile.role === "Moderator"
    if (!adminOrMod) {
      alert(
        "Only administrators or moderators can spin-up new boards in this local scope!"
      )
      return
    }

    newBoardModal.classList.remove("hidden")

    // Inject preset options inside create form
    const container = document.getElementById("new-board-presets")
    container.innerHTML = ""

    DEFAULT_THEMES.forEach(theme => {
      const label = document.createElement("label")
      label.className =
        "flex items-center justify-between p-2 rounded-xl border text-xs cursor-pointer hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
      label.innerHTML = `
        <div class="flex items-center gap-1.5 select-none">
          <input type="radio" name="board-create-theme" value="${theme.id}" class="rounded-full w-3.5 h-3.5" checked>
          <span>${theme.name}</span>
        </div>
        <div class="w-3 h-3 rounded-full" style="background-color: ${theme.primary};"></div>
      `
      container.appendChild(label)
    })
  }

  const closeNewBoardModal = () => {
    newBoardModal.classList.add("hidden")
    newBoardForm.reset()
  }

  openNewBoardBtn.onclick = openNewBoardModal
  closeNewBoardBtn.onclick = closeNewBoardModal
  cancelNewBoardBtn.onclick = closeNewBoardModal
  overlayNewBoard.onclick = closeNewBoardModal

  newBoardForm.onsubmit = e => {
    e.preventDefault()
    const activeProfile = appStore.getActiveProfile()
    const title = document.getElementById("new-board-name").value.trim()
    const desc = document.getElementById("new-board-desc").value.trim()
    const chosenThemeInput = document.querySelector(
      'input[name="board-create-theme"]:checked'
    )
    const themeId = chosenThemeInput
      ? chosenThemeInput.value
      : DEFAULT_THEMES[0].id

    if (!title) return

    const formattedTitle =
      title.startsWith("👋") ||
      title.startsWith("🎨") ||
      title.startsWith("🛠️") ||
      title.startsWith("📌")
        ? title
        : `📌 ${title}`

    const newBoard = {
      id: `b-${Date.now()}`,
      name: formattedTitle,
      description: desc || "Custom created board.",
      themeId: themeId,
      icon: "MessageSquare",
      createdAt: new Date().toISOString(),
      createdBy: activeProfile.id
    }

    appStore.updateState(prev => ({
      ...prev,
      boards: [...prev.boards, newBoard],
      activeBoardId: newBoard.id
    }))

    closeNewBoardModal()
    renderAll()
  }

  // 7. Theme palette modal triggers
  const openThemeBtn = document.getElementById("board-theme-btn")
  const overlayTheme = document.getElementById("board-theme-modal-overlay")
  const cancelThemeBtn = document.getElementById("theme-cancel-btn")
  const themeForm = document.getElementById("theme-modal-form")
  const resetThemeBtn = document.getElementById("theme-reset-all-btn")

  openThemeBtn.onclick = () => {
    const activeProfile = appStore.getActiveProfile()
    const adminOrMod =
      activeProfile.role === "Admin" || activeProfile.role === "Moderator"
    if (!adminOrMod) {
      alert(
        "Only administrators or moderators can alter the shared palette rules!"
      )
      return
    }

    activePalettePresetId = null
    boardThemeModal.classList.remove("hidden")
    renderThemeColorsInForm()
  }

  const closeThemeModal = () => {
    boardThemeModal.classList.add("hidden")
  }

  cancelThemeBtn.onclick = closeThemeModal
  overlayTheme.onclick = closeThemeModal

  // Sync color pickers with hex text inputs
  const colorItems = ["primary", "secondary", "bg", "card", "text", "border"]
  colorItems.forEach(item => {
    const colInput = document.getElementById(`theme-col-${item}`)
    const textInput = document.getElementById(`theme-text-${item}`)

    colInput.oninput = () => {
      textInput.value = colInput.value.toUpperCase()
      updateLiveThemePreview()
    }

    textInput.oninput = () => {
      // Validate hex syntax
      if (textInput.value.match(/^#[0-9A-F]{6}$/i)) {
        colInput.value = textInput.value
        updateLiveThemePreview()
      }
    }
  })

  const isDarkCheck = document.getElementById("theme-is-dark")
  isDarkCheck.onchange = updateLiveThemePreview

  // Reset theme back to original defaults
  resetThemeBtn.onclick = () => {
    const activeBoard = appStore.getActiveBoard()
    const originalDefaultTheme =
      DEFAULT_THEMES.find(t => t.id === activeBoard.themeId) ||
      DEFAULT_THEMES[0]

    activePalettePresetId = originalDefaultTheme.id

    colorItems.forEach(item => {
      const colInput = document.getElementById(`theme-col-${item}`)
      const textInput = document.getElementById(`theme-text-${item}`)
      const val = originalDefaultTheme[item === "bg" ? "background" : item]

      colInput.value = val
      textInput.value = val
    })

    isDarkCheck.checked = originalDefaultTheme.isDark
    updateLiveThemePreview()
  }

  themeForm.onsubmit = e => {
    e.preventDefault()
    const activeBoard = appStore.getActiveBoard()

    const primaryVal = document.getElementById("theme-text-primary").value
    const secondaryVal = document.getElementById("theme-text-secondary").value
    const bgVal = document.getElementById("theme-text-bg").value
    const cardVal = document.getElementById("theme-text-card").value
    const textVal = document.getElementById("theme-text-text").value
    const borderVal = document.getElementById("theme-text-border").value
    const isDarkChecked = isDarkCheck.checked

    const customTheme = {
      id: `custom-${Date.now()}`,
      name: "Custom Tailored Theme",
      primary: primaryVal,
      secondary: secondaryVal,
      background: bgVal,
      card: cardVal,
      text: textVal,
      border: borderVal,
      isDark: isDarkChecked
    }

    appStore.updateState(prev => ({
      ...prev,
      boards: prev.boards.map(b =>
        b.id === activeBoard.id ? { ...b, customTheme } : b
      )
    }))

    closeThemeModal()
    renderAll()
  }

  // 8. Global settings triggers
  const openSettingsBtn = document.getElementById("global-settings-btn")
  const mobSettingsBtn = document.getElementById("mobile-settings-btn")
  const closeSettingsBtn = document.getElementById("settings-close-btn")
  const overlaySettings = document.getElementById("settings-modal-overlay")

  const openSettings = () => {
    settingsModal.classList.remove("hidden")
    loadSettingsToModal()
  }

  const closeSettings = () => {
    settingsModal.classList.add("hidden")
  }

  openSettingsBtn.onclick = openSettings
  mobSettingsBtn.onclick = openSettings
  closeSettingsBtn.onclick = closeSettings
  overlaySettings.onclick = closeSettings

  // Watch modal form changes
  const darkModeCheck = document.getElementById("settings-dark-mode")
  const densitySelect = document.getElementById("settings-density")
  const orderingSelect = document.getElementById("settings-ordering")
  const allowRepliesCheck = document.getElementById("settings-allow-replies")
  const allowReactionsCheck = document.getElementById(
    "settings-allow-reactions"
  )

  darkModeCheck.onchange = () => {
    appStore.updateState(prev => ({
      ...prev,
      settings: { ...prev.settings, darkMode: darkModeCheck.checked }
    }))
    renderAll()
  }

  densitySelect.onchange = () => {
    appStore.updateState(prev => ({
      ...prev,
      settings: { ...prev.settings, density: densitySelect.value }
    }))
    renderAll()
  }

  orderingSelect.onchange = () => {
    appStore.updateState(prev => ({
      ...prev,
      settings: { ...prev.settings, messageOrdering: orderingSelect.value }
    }))
    renderAll()
  }

  allowRepliesCheck.onchange = () => {
    appStore.updateState(prev => ({
      ...prev,
      settings: { ...prev.settings, allowReplies: allowRepliesCheck.checked }
    }))
    renderAll()
  }

  allowReactionsCheck.onchange = () => {
    appStore.updateState(prev => ({
      ...prev,
      settings: {
        ...prev.settings,
        allowReactions: allowReactionsCheck.checked
      }
    }))
    renderAll()
  }

  // 9. Export / Import actions uploader
  const exportBtn = document.getElementById("export-workspace-btn")
  const importTrigger = document.getElementById("import-workspace-trigger")
  const fileInput = document.getElementById("workspace-file-input")
  const fb = document.getElementById("import-feedback")

  exportBtn.onclick = () => {
    try {
      const state = appStore.getState()
      const rawJson = JSON.stringify(state, null, 2)
      const blob = new Blob([rawJson], { type: "application/json" })
      const link = document.createElement("a")
      link.href = URL.createObjectURL(blob)
      link.setAttribute(
        "download",
        `Scribble_Backup_${new Date().toISOString().split("T")[0]}.json`
      )
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
    } catch (err) {
      alert(`Export failed: ${err}`)
    }
  }

  importTrigger.onclick = () => {
    fileInput.click()
  }

  fileInput.onchange = e => {
    const file = fileInput.files?.[0]
    if (!file) return

    fb.classList.remove("hidden")
    fb.classList.remove("text-emerald-500")
    fb.classList.remove("text-rose-500")
    fb.classList.add("text-slate-400")
    fb.innerText = "Analyzing uploader file..."

    const reader = new FileReader()
    reader.onload = evt => {
      try {
        const rawText = evt.target?.result
        const parsed = JSON.parse(rawText)

        // Core schema checks
        if (
          !parsed.profiles ||
          !parsed.boards ||
          !parsed.messages ||
          !parsed.activeProfileId
        ) {
          throw new Error(
            "Selected JSON lacks workspace keys (profiles, boards, or messages)."
          )
        }

        appStore.updateState(() => parsed)

        fb.classList.remove("text-slate-400")
        fb.classList.add("text-emerald-500")
        fb.innerText = "Workspace success! Restoring view..."

        setTimeout(() => {
          fb.classList.add("hidden")
          closeSettings()
          renderAll()
        }, 1500)
      } catch (err) {
        fb.classList.remove("text-slate-400")
        fb.classList.add("text-rose-500")
        fb.innerText = `Error: ${err.message || "Malformed JSON file"}`
        setTimeout(() => {
          fb.classList.add("hidden")
        }, 6000)
      }
    }
    reader.readAsText(file)
    // clear input
    fileInput.value = ""
  }

  // 10. Factory reset handler
  const factoryBtn = document.getElementById("trigger-factory-reset-btn")
  factoryBtn.onclick = () => {
    if (
      confirm(
        "Acknowledge: This resets all custom boards, profiles, and deletes any messages in LocalStorage forever. Proceed?"
      )
    ) {
      localStorage.removeItem(LOCAL_STORAGE_KEY)
      // Hard refresh page to get initial data
      window.location.reload()
    }
  }
})
