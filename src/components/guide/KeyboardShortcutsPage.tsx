import React from "react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";

const KeyboardShortcutsPage: React.FC = () => {
  return (
    <div className="min-h-screen px-8">
      <div className="bg-white border-b border-gray-200 mb-8">
        <div className="container-custom py-6">
          <Link to="/" className="inline-flex items-center mb-4">
            <span className="h-4 w-4 mr-2">←</span>
            Back to Documentation
          </Link>
          <div className="text-center">
            <h1 className="text-3xl font-bold mb-2">Keyboard Shortcuts</h1>
            <p className="text-lg text-gray-600">
              Editor shortcuts (Tiptap defaults) + Kanban board shortcuts
            </p>
          </div>
        </div>
      </div>

      <div className="container-custom py-8 max-w-4xl">
        <div className="mb-8 p-4 bg-blue-50 border border-blue-100 rounded-xl">
          <h3 className="font-semibold text-blue-900 mb-2">Important Notes</h3>
          <ul className="space-y-1 text-sm text-blue-800">
            <li>• The main editor uses <strong>standard Tiptap/browser defaults</strong> — no custom editor shortcuts are configured</li>
            <li>• On Windows/Linux, replace <kbd className="px-1.5 py-0.5 bg-white rounded border">Cmd</kbd> with <kbd className="px-1.5 py-0.5 bg-white rounded border">Ctrl</kbd></li>
            <li>• Shortcuts only work when the editor/kanban is focused (not in input fields)</li>
            <li>• Kanban shortcuts are only active in the Kanban board view (<code>/dashboard/workspace/:id/kanban</code>)</li>
            <li>• Press <kbd className="px-1.5 py-0.5 bg-gray-100 rounded border">?</kbd> in Kanban view to see the shortcut helper</li>
          </ul>
        </div>

        {/* Editor Shortcuts (Tiptap Defaults) */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-6">Editor (Tiptap Defaults)</h2>
          <p className="text-gray-600 mb-4">
            These are standard browser/Tiptap shortcuts. No custom editor shortcuts are configured.
          </p>
          <Table>
            <TableHeader>
              <TableRow className="bg-gray-100">
                <TableHead className="w-1/2 text-gray-900 font-bold">Shortcut</TableHead>
                <TableHead className="text-gray-900 font-bold">Action</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow className="hover:bg-gray-50">
                <TableCell className="text-gray-800"><kbd className="px-2 py-1 bg-gray-100 rounded border text-sm font-mono">Cmd+B</kbd> / <kbd className="px-2 py-1 bg-gray-100 rounded border text-sm font-mono">Ctrl+B</kbd></TableCell>
                <TableCell className="text-gray-800">Toggle bold</TableCell>
              </TableRow>
              <TableRow className="hover:bg-gray-50">
                <TableCell className="text-gray-800"><kbd className="px-2 py-1 bg-gray-100 rounded border text-sm font-mono">Cmd+I</kbd> / <kbd className="px-2 py-1 bg-gray-100 rounded border text-sm font-mono">Ctrl+I</kbd></TableCell>
                <TableCell className="text-gray-800">Toggle italic</TableCell>
              </TableRow>
              <TableRow className="hover:bg-gray-50">
                <TableCell className="text-gray-800"><kbd className="px-2 py-1 bg-gray-100 rounded border text-sm font-mono">Cmd+U</kbd> / <kbd className="px-2 py-1 bg-gray-100 rounded border text-sm font-mono">Ctrl+U</kbd></TableCell>
                <TableCell className="text-gray-800">Toggle underline</TableCell>
              </TableRow>
              <TableRow className="hover:bg-gray-50">
                <TableCell className="text-gray-800"><kbd className="px-2 py-1 bg-gray-100 rounded border text-sm font-mono">Cmd+Shift+X</kbd> / <kbd className="px-2 py-1 bg-gray-100 rounded border text-sm font-mono">Ctrl+Shift+X</kbd></TableCell>
                <TableCell className="text-gray-800">Toggle strikethrough</TableCell>
              </TableRow>
              <TableRow className="hover:bg-gray-50">
                <TableCell className="text-gray-800"><kbd className="px-2 py-1 bg-gray-100 rounded border text-sm font-mono">Cmd+K</kbd> / <kbd className="px-2 py-1 bg-gray-100 rounded border text-sm font-mono">Ctrl+K</kbd></TableCell>
                <TableCell className="text-gray-800">Insert/edit link</TableCell>
              </TableRow>
              <TableRow className="hover:bg-gray-50">
                <TableCell className="text-gray-800"><kbd className="px-2 py-1 bg-gray-100 rounded border text-sm font-mono">Cmd+Shift+7</kbd> / <kbd className="px-2 py-1 bg-gray-100 rounded border text-sm font-mono">Ctrl+Shift+7</kbd></TableCell>
                <TableCell className="text-gray-800">Toggle numbered list</TableCell>
              </TableRow>
              <TableRow className="hover:bg-gray-50">
                <TableCell className="text-gray-800"><kbd className="px-2 py-1 bg-gray-100 rounded border text-sm font-mono">Cmd+Shift+8</kbd> / <kbd className="px-2 py-1 bg-gray-100 rounded border text-sm font-mono">Ctrl+Shift+8</kbd></TableCell>
                <TableCell className="text-gray-800">Toggle bullet list</TableCell>
              </TableRow>
              <TableRow className="hover:bg-gray-50">
                <TableCell className="text-gray-800"><kbd className="px-2 py-1 bg-gray-100 rounded border text-sm font-mono">Cmd+Shift+9</kbd> / <kbd className="px-2 py-1 bg-gray-100 rounded border text-sm font-mono">Ctrl+Shift+9</kbd></TableCell>
                <TableCell className="text-gray-800">Toggle task list</TableCell>
              </TableRow>
              <TableRow className="hover:bg-gray-50">
                <TableCell className="text-gray-800"><kbd className="px-2 py-1 bg-gray-100 rounded border text-sm font-mono">Cmd+Enter</kbd> / <kbd className="px-2 py-1 bg-gray-100 rounded border text-sm font-mono">Ctrl+Enter</kbd></TableCell>
                <TableCell className="text-gray-800">Insert code block</TableCell>
              </TableRow>
              <TableRow className="hover:bg-gray-50">
                <TableCell className="text-gray-800"><kbd className="px-2 py-1 bg-gray-100 rounded border text-sm font-mono">Cmd+Shift+M</kbd> / <kbd className="px-2 py-1 bg-gray-100 rounded border text-sm font-mono">Ctrl+Shift+M</kbd></TableCell>
                <TableCell className="text-gray-800">Insert inline code</TableCell>
              </TableRow>
              <TableRow className="hover:bg-gray-50">
                <TableCell className="text-gray-800"><kbd className="px-2 py-1 bg-gray-100 rounded border text-sm font-mono">Cmd+Shift+.</kbd> / <kbd className="px-2 py-1 bg-gray-100 rounded border text-sm font-mono">Ctrl+Shift+.</kbd></TableCell>
                <TableCell className="text-gray-800">Toggle blockquote</TableCell>
              </TableRow>
              <TableRow className="hover:bg-gray-50">
                <TableCell className="text-gray-800"><kbd className="px-2 py-1 bg-gray-100 rounded border text-sm font-mono">Cmd+Z</kbd> / <kbd className="px-2 py-1 bg-gray-100 rounded border text-sm font-mono">Ctrl+Z</kbd></TableCell>
                <TableCell className="text-gray-800">Undo</TableCell>
              </TableRow>
              <TableRow className="hover:bg-gray-50">
                <TableCell className="text-gray-800"><kbd className="px-2 py-1 bg-gray-100 rounded border text-sm font-mono">Cmd+Shift+Z</kbd> / <kbd className="px-2 py-1 bg-gray-100 rounded border text-sm font-mono">Ctrl+Shift+Z</kbd></TableCell>
                <TableCell className="text-gray-800">Redo</TableCell>
              </TableRow>
              <TableRow className="hover:bg-gray-50">
                <TableCell className="text-gray-800"><kbd className="px-2 py-1 bg-gray-100 rounded border text-sm font-mono">Tab</kbd></TableCell>
                <TableCell className="text-gray-800">Increase indent (in lists)</TableCell>
              </TableRow>
              <TableRow className="hover:bg-gray-50">
                <TableCell className="text-gray-800"><kbd className="px-2 py-1 bg-gray-100 rounded border text-sm font-mono">Shift+Tab</kbd></TableCell>
                <TableCell className="text-gray-800">Decrease indent (in lists)</TableCell>
              </TableRow>
              <TableRow className="hover:bg-gray-50">
                <TableCell className="text-gray-800"><kbd className="px-2 py-1 bg-gray-100 rounded border text-sm font-mono">Enter</kbd></TableCell>
                <TableCell className="text-gray-800">New paragraph / split block</TableCell>
              </TableRow>
              <TableRow className="hover:bg-gray-50">
                <TableCell className="text-gray-800"><kbd className="px-2 py-1 bg-gray-100 rounded border text-sm font-mono">Shift+Enter</kbd></TableCell>
                <TableCell className="text-gray-800">Soft line break</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </section>

        {/* Slash Commands */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-6">Slash Commands (Type <kbd className="px-2 py-1 bg-gray-100 rounded border text-sm font-mono">/</kbd> in editor)</h2>
          <p className="text-gray-600 mb-4">
            Type <kbd className="px-2 py-1 bg-gray-100 rounded border text-sm font-mono">/</kbd> anywhere in the editor to open the quick-insert menu. Continue typing to filter.
          </p>
          <Table>
            <TableHeader>
              <TableRow className="bg-gray-100">
                <TableHead className="w-1/3 text-gray-900 font-bold">Command</TableHead>
                <TableHead className="text-gray-900 font-bold">Inserts</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow className="hover:bg-gray-50">
                <TableCell className="text-gray-800 font-mono text-sm">/heading1, /h1</TableCell>
                <TableCell className="text-gray-800">Heading 1</TableCell>
              </TableRow>
              <TableRow className="hover:bg-gray-50">
                <TableCell className="text-gray-800 font-mono text-sm">/heading2, /h2</TableCell>
                <TableCell className="text-gray-800">Heading 2</TableCell>
              </TableRow>
              <TableRow className="hover:bg-gray-50">
                <TableCell className="text-gray-800 font-mono text-sm">/heading3, /h3</TableCell>
                <TableCell className="text-gray-800">Heading 3</TableCell>
              </TableRow>
              <TableRow className="hover:bg-gray-50">
                <TableCell className="text-gray-800 font-mono text-sm">/bullet, /ul</TableCell>
                <TableCell className="text-gray-800">Bullet list</TableCell>
              </TableRow>
              <TableRow className="hover:bg-gray-50">
                <TableCell className="text-gray-800 font-mono text-sm">/ordered, /ol</TableCell>
                <TableCell className="text-gray-800">Numbered list</TableCell>
              </TableRow>
              <TableRow className="hover:bg-gray-50">
                <TableCell className="text-gray-800 font-mono text-sm">/task, /todo</TableCell>
                <TableCell className="text-gray-800">Task list (checkbox)</TableCell>
              </TableRow>
              <TableRow className="hover:bg-gray-50">
                <TableCell className="text-gray-800 font-mono text-sm">/blockquote, /quote</TableCell>
                <TableCell className="text-gray-800">Blockquote</TableCell>
              </TableRow>
              <TableRow className="hover:bg-gray-50">
                <TableCell className="text-gray-800 font-mono text-sm">/code, /codeblock</TableCell>
                <TableCell className="text-gray-800">Code block</TableCell>
              </TableRow>
              <TableRow className="hover:bg-gray-50">
                <TableCell className="text-gray-800 font-mono text-sm">/hr, /divider</TableCell>
                <TableCell className="text-gray-800">Horizontal rule</TableCell>
              </TableRow>
              <TableRow className="hover:bg-gray-50">
                <TableCell className="text-gray-800 font-mono text-sm">/table</TableCell>
                <TableCell className="text-gray-800">Table (3x3 default)</TableCell>
              </TableRow>
              <TableRow className="hover:bg-gray-50">
                <TableCell className="text-gray-800 font-mono text-sm">/citation, /cite</TableCell>
                <TableCell className="text-gray-800">Add citation (opens modal)</TableCell>
              </TableRow>
              <TableRow className="hover:bg-gray-50">
                <TableCell className="text-gray-800 font-mono text-sm">/figure, /image</TableCell>
                <TableCell className="text-gray-800">Figure with caption</TableCell>
              </TableRow>
              <TableRow className="hover:bg-gray-50">
                <TableCell className="text-gray-800 font-mono text-sm">/callout, /note</TableCell>
                <TableCell className="text-gray-800">Callout box (info/warning/tip)</TableCell>
              </TableRow>
              <TableRow className="hover:bg-gray-50">
                <TableCell className="text-gray-800 font-mono text-sm">/math, /equation</TableCell>
                <TableCell className="text-gray-800">Inline math / display math</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </section>

        {/* Kanban Board Shortcuts */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-6">Kanban Board (<code>/dashboard/workspace/:id/kanban</code>)</h2>
          <p className="text-gray-600 mb-4">
            These shortcuts are only active when the Kanban board view is focused.
            Press <kbd className="px-1.5 py-0.5 bg-gray-100 rounded border">?</kbd> to see the in-app helper.
          </p>
          <Table>
            <TableHeader>
              <TableRow className="bg-gray-100">
                <TableHead className="w-1/3 text-gray-900 font-bold">Shortcut</TableHead>
                <TableHead className="text-gray-900 font-bold">Action</TableHead>
                <TableHead className="text-gray-900 font-bold">Category</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow className="hover:bg-gray-50">
                <TableCell className="text-gray-800"><kbd className="px-2 py-1 bg-gray-100 rounded border text-sm font-mono">N</kbd></TableCell>
                <TableCell className="text-gray-800">Create new task</TableCell>
                <TableCell className="text-gray-600">Tasks</TableCell>
              </TableRow>
              <TableRow className="hover:bg-gray-50">
                <TableCell className="text-gray-800"><kbd className="px-2 py-1 bg-gray-100 rounded border text-sm font-mono">?</kbd></TableCell>
                <TableCell className="text-gray-800">Show/hide shortcuts helper</TableCell>
                <TableCell className="text-gray-600">Help</TableCell>
              </TableRow>
              <TableRow className="hover:bg-gray-50">
                <TableCell className="text-gray-800"><kbd className="px-2 py-1 bg-gray-100 rounded border text-sm font-mono">Escape</kbd></TableCell>
                <TableCell className="text-gray-800">Close modals / hide helper</TableCell>
                <TableCell className="text-gray-600">Navigation</TableCell>
              </TableRow>
              <TableRow className="hover:bg-gray-50">
                <TableCell className="text-gray-800"><kbd className="px-2 py-1 bg-gray-100 rounded border text-sm font-mono">Ctrl+K</kbd> / <kbd className="px-2 py-1 bg-gray-100 rounded border text-sm font-mono">Cmd+K</kbd></TableCell>
                <TableCell className="text-gray-800">Focus search input</TableCell>
                <TableCell className="text-gray-600">Navigation</TableCell>
              </TableRow>
              <TableRow className="hover:bg-gray-50">
                <TableCell className="text-gray-800"><kbd className="px-2 py-1 bg-gray-100 rounded border text-sm font-mono">B</kbd></TableCell>
                <TableCell className="text-gray-800">Switch to Board (Kanban) view</TableCell>
                <TableCell className="text-gray-600">Views</TableCell>
              </TableRow>
              <TableRow className="hover:bg-gray-50">
                <TableCell className="text-gray-800"><kbd className="px-2 py-1 bg-gray-100 rounded border text-sm font-mono">L</kbd></TableCell>
                <TableCell className="text-gray-800">Switch to List view</TableCell>
                <TableCell className="text-gray-600">Views</TableCell>
              </TableRow>
              <TableRow className="hover:bg-gray-50">
                <TableCell className="text-gray-800"><kbd className="px-2 py-1 bg-gray-100 rounded border text-sm font-mono">C</kbd></TableCell>
                <TableCell className="text-gray-800">Switch to Calendar view</TableCell>
                <TableCell className="text-gray-600">Views</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </section>

        {/* Global Shortcuts */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-6">Global / Browser</h2>
          <Table>
            <TableHeader>
              <TableRow className="bg-gray-100">
                <TableHead className="w-1/3 text-gray-900 font-bold">Shortcut</TableHead>
                <TableHead className="text-gray-900 font-bold">Action</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow className="hover:bg-gray-50">
                <TableCell className="text-gray-800"><kbd className="px-2 py-1 bg-gray-100 rounded border text-sm font-mono">Cmd+F</kbd> / <kbd className="px-2 py-1 bg-gray-100 rounded border text-sm font-mono">Ctrl+F</kbd></TableCell>
                <TableCell className="text-gray-800">Browser find in page</TableCell>
              </TableRow>
              <TableRow className="hover:bg-gray-50">
                <TableCell className="text-gray-800"><kbd className="px-2 py-1 bg-gray-100 rounded border text-sm font-mono">Cmd+Shift+F</kbd> / <kbd className="px-2 py-1 bg-gray-100 rounded border text-sm font-mono">Ctrl+Shift+F</kbd></TableCell>
                <TableCell className="text-gray-800">Toggle Focus Mode (hides sidebars)</TableCell>
              </TableRow>
              <TableRow className="hover:bg-gray-50">
                <TableCell className="text-gray-800"><kbd className="px-2 py-1 bg-gray-100 rounded border text-sm font-mono">Cmd+S</kbd> / <kbd className="px-2 py-1 bg-gray-100 rounded border text-sm font-mono">Ctrl+S</kbd></TableCell>
                <TableCell className="text-gray-800">Trigger manual save (auto-saves every ~2s)</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </section>

        <Card className="bg-gray-50 border-gray-200">
          <CardHeader>
            <CardTitle className="text-lg font-semibold">Shortcuts Not Working?</CardTitle>
          </CardHeader>
          <CardContent className="text-sm text-gray-700">
            <ul className="list-disc pl-5 space-y-1">
              <li>Ensure editor/Kanban is focused (click in the writing area or board)</li>
              <li>Check no input field/textarea is focused (Esc to exit)</li>
              <li>Disable browser extensions that intercept keys (Vimium, password managers)</li>
              <li>Try in incognito/private window to isolate extension conflicts</li>
              <li>On macOS: check System Settings → Keyboard → Keyboard Shortcuts for conflicts</li>
              <li><Link to="/troubleshooting" className="text-blue-600 hover:underline">Troubleshooting Guide →</Link></li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default KeyboardShortcutsPage;