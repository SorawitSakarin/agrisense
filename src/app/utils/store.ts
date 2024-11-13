// 'use client';
// import { create } from 'zustand';
// import dayjs from 'dayjs';

// interface FilterStore {
//   storeId: number;
//   startDate: Date;
//   endDate: Date;
//   setStoreId: (id: number) => void;
//   setStartDate: (date: Date) => void;
//   setEndDate: (date: Date) => void;
// }

// export const useFilterStore = create<FilterStore>((set) => ({
//   storeId: 4,
//   startDate: dayjs().subtract(1, 'day').startOf('day').toDate(),
//   endDate: dayjs().subtract(1, 'day').startOf('day').toDate(),
//   setStoreId: (id: number) => set({ storeId: id }),
//   setStartDate: (date: Date) => set({ startDate: date }),
//   setEndDate: (date: Date) => set({ endDate: date }),
// }));

// interface SideBarLayout {
//   collapsed: boolean;
//   setCollapsed: (collapsed: boolean) => void;
//   showMenuMobile: boolean;
//   setShowMenuMobile: (showMenuMobile: boolean) => void;
// }

// export const useSideBarLayoutStore = create<SideBarLayout>((set) => ({
//   collapsed: true,
//   setCollapsed: (collapsed: boolean) => set({ collapsed }),
//   showMenuMobile: false,
//   setShowMenuMobile: (showMenuMobile: boolean) => set({ showMenuMobile }),
// }));
