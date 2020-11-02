import { useState } from 'react';

export function useConfirmDialog() {
    const [openConfirmDialog, setOpenConfirmDialog] = useState (false);
    return {
        openConfirmDialog,
        setOpenConfirmDialog
    }
}