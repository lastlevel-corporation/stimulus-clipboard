import { defineConfig } from "vite";
import path from "path";
import typescript from "@rollup/plugin-typescript";
import { typescriptPaths } from "rollup-plugin-typescript-paths";

export default defineConfig({
  plugins: [],
  resolve: {
    alias: {
      "~": path.resolve(__dirname, "./src"),  // Alias pour simplifier les imports
    },
  },
  build: {
    lib: {
      entry: path.resolve(__dirname, "src/main_controller.ts"),  // Entrée principale du package
      name: "ClipboardController",                                    // Nom global (pour les UMD)
      fileName: (format) => `main_controller.${format}.js`,      // Noms des fichiers de sortie
      formats: ["es", "cjs", "umd"],                                  // Formats de sortie pour couvrir différents cas d'usage
    },
    rollupOptions: {
      external: [],                                                   // Modules externes à exclure du bundle
      output: {
        globals: {},                                                  // Globales pour UMD si nécessaire
      },
      plugins: [
        typescriptPaths({
          preserveExtensions: true,                                   // Conserver les extensions pour TypeScript
        }),
        typescript({
          tsconfig: "./tsconfig.json",                                // Utiliser votre tsconfig.json
          declaration: true,                                          // Générer des fichiers .d.ts
          declarationDir: "dist/types",                               // Dossier des fichiers de déclaration
          sourceMap: false,                                           // Désactiver les source maps
          outDir: "dist",                                             // Dossier de sortie
        }),
      ],
    },
  },
});
