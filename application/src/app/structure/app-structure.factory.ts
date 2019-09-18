import {AppStructureProvider} from "./app-structure.provider";

export function AppStructureFactory(provider: AppStructureProvider) {
    return () => provider.load();
}