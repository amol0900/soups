import { useState } from 'react';

export function usePayDialog() {
    const [openPayDialog, setOpenPayDialog] = useState (false);
    return {
        openPayDialog,
        setOpenPayDialog
    }
}