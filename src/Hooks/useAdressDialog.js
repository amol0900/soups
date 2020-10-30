import { useState } from 'react';

export function useAdressDialog() {
    const [openAdressDialog, setOpenAdressDialog] = useState (false);
    return {
        openAdressDialog,
        setOpenAdressDialog
    }
}