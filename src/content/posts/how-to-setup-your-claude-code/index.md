---
title: How to Set Up Your Claude Code
published: 2025-07-24
description: ''
image: ''
tags: []
category: ''
draft: false 
lang: ''
---

# Claude Code Configuration Guide

## Config Scopes and Files

- `~/.claude/settings.json` - **user scope** settings (hooks, models, permissions)
- `.claude/settings.json` - **project scope** settings
- `.claude/settings.local.json` - **local scope** settings (auto-added to .gitignore)
- `~/.claude.json` - MCP servers at user scope

### Precedence Order
1. Enterprise policies
2. Command line arguments
3. Local project settings
4. Shared project settings
5. User settings

## Modify Tool Permissions

### In claude code

```bash
# In Claude Code, type the following command
/permission
```
![](permissions-in-cc.png)
Then you can see permission list defined across all scopes. Add a new rule or select an existing one to delete. All modifications you made will take effect immediately.

### In config file

You can modify the permission rules at different scopes manually by editing corresponding config file.

```json
{
  "permissions": {
    "allow": [
      "Bash(ls:*)",
      "Bash(tail:*)",
      "Bash(head:*)",
      "WebFetch(domain:www.kaggle.com)",
      "WebFetch(domain:docs.*)",
      "WebSearch"
    ],
    "deny": [
      "Bash(rm -rf: *)"
    ]
  }
}
```
You need to restart Claude Code to make it work.

### Tool Permission Types

#### Default Tool Permissions

Some core tools are **automatically allowed by default** and don't require explicit permission entries:

**Always Available (No Permission Required):**
- `Glob` - File pattern matching
- `Grep` - Text search in files
- `LS` - Directory listing
- `Read` - Reading files
- `NotebookRead` - Reading Jupyter notebooks
- `Task` - Launching sub-agents
- `TodoWrite` - Task management
- `WebSearch` - Web searching (Note: Some users report this requires permission in certain versions - check your setup if it doesn't work)

**Require Explicit Permission:**
- `Bash` - Shell commands (potentially dangerous)
- `Edit` / `MultiEdit` / `Write` - File modifications
- `NotebookEdit` - Modifying Jupyter notebooks
- `WebFetch` - External web requests

#### Configurable Tool Permissions

For tools that require explicit permissions, you can configure them in different ways:

**General permissions (allow all):**
- `Bash` - allows all bash commands
- `WebFetch` - allows fetching from any domain
- `WebSearch` - allows searching any content

**Specific restrictions:**
- `Bash(command:*)` - allows specific bash commands with wildcards
- `WebFetch(domain:example.com)` - allows fetching only from specified domains
- `WebSearch(domain:example.com)` - restricts web search to specific domains

**Examples:**
```json
"allow": [
  "WebFetch(domain:github.com)",
  "WebFetch(domain:docs.anthropic.com)", 
  "WebFetch(domain:*.google.com)",
  "WebSearch",
  "Bash(git:*)",
  "Bash(npm:*)"
]
```

## Hooks Configuration

Hooks are shell commands that execute automatically at specific points in Claude Code's lifecycle.

### Key Hook Events Available:
- `UserPromptSubmit` - Before Claude processes your prompt
- `PreToolUse` - Before any tool execution  
- `PostToolUse` - After tool completes
- `Notification` - When Claude sends notifications
- `Stop` - When main agent finishes
- `SubagentStop` - When subagent finishes

### Example Hook Configuration:
```json
{
  "hooks": {
    "Notification": [
      {
        "matcher": "",
        "hooks": [
          {
            "type": "command",
            "command": "jq -r '.message' | grep -vFx 'Claude is waiting for your input' && say -v Ava \"Your agent needs your attention\""
          }
        ]
      }
    ],
    "Stop": [
      {
        "matcher": "",
        "hooks": [
          {
            "type": "command",
            "command": "say -v Ava \"Job complete\""
          }
        ]
      }
    ]
  }
}
```

### Best Practices:
- Always quote variables: `"$VAR"` not `$VAR`
- Use matchers to target specific tools/conditions
- Keep hooks lightweight to avoid slowing down Claude
- Test hooks carefully - they execute automatically

## MCP Servers Configuration

MCP (Model Context Protocol) allows Claude Code to connect to external tools and services.

### Using Claude CLI Commands

**Example 1: Simple MCP server (memory)**
```bash
claude mcp add -s user server-memory -- npx -y @modelcontextprotocol/server-memory
```
*Configuration stored in: `~/.claude.json`*

**Why the `--` separator is needed:**
The `--` tells the CLI parser to stop processing flags and treat everything after it as the actual MCP server command. Without it, the CLI might interpret MCP server arguments (like `-y` in `npx -y`) as Claude CLI flags, causing parsing errors.

**Example 2: MCP server with environment variables**
```bash
claude mcp add -s project brave-search -e BRAVE_API_KEY=your-api-key -- npx -y @modelcontextprotocol/server-brave-search
```
*Configuration stored in: `.claude/mcp.json`*

### Management Commands
```bash
# List all MCP servers
claude mcp list

# Remove a server  
claude mcp remove server-name
```

### Modify MCP configuration in file

You can also add and delete MCP servers in `.claude/mcp.json` — at project scope and in `~/.claude.json` — at user scope.

```json
{
  "mcpServers": {
    "server-memory": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-memory"]
    },
    "brave-search": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-brave-search"],
      "env": {
        "BRAVE_API_KEY": "your-api-key"
      }
    }
  }
}
```

