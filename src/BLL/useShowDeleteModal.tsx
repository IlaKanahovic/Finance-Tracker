import { useState } from "react";

export function useShowDeleteModal() {
    const [showDeleteModal, setShowDeleteModal] = useState(false)

    return {showDeleteModal, setShowDeleteModal}
}