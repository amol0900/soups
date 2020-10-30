import { useState } from 'react';

export function useSummaryDialog() {
    const [openSummaryDialog, setOpenSummaryDialog] = useState (false);
    return {
        openSummaryDialog,
        setOpenSummaryDialog
    }
}