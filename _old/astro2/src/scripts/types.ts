export interface ThemeStore {
  isDark: boolean;
  init(): void;
  toggle(): void;
}
