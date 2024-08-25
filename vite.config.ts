import {defineConfig} from "vite";
import path from "path";
import typescript from "@rollup/plugin-typescript";
import {typescriptPaths} from "rollup-plugin-typescript-paths";

export default defineConfig({
    plugins: [],
    resolve: {
        alias: {
            "~": path.resolve(__dirname, "./src/controllers"),
        },
    },
    build: {
        lib: {
            entry: path.resolve(__dirname, "src/controllers/clipboard_controller.ts"),
            name: "StimulusClipboardController",
            fileName: (format) => `clipboard_controller.${format}.js`,
            formats: ["es", "cjs", "umd"],
        },
        rollupOptions: {
            external: [],
            output: {
                globals: {},
            },
            plugins: [
                typescriptPaths({
                    preserveExtensions: true,
                }),
                typescript({
                    tsconfig: "./tsconfig.json",
                    declaration: true,
                    declarationDir: "dist/types",
                    sourceMap: false,
                    outDir: "dist",
                }),
            ],
        },
    },
});
