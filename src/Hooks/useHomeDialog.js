import { useState } from 'react';

export function useHomeDialog() {
    const [openHomeDialog, setOpenHomeDialog] = useState(true);
    return {
        openHomeDialog,
        setOpenHomeDialog
    }
}