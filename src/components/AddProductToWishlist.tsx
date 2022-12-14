export interface AddProductToWishlistProps {
    onAddToWishlist: () => void;
    onRequestClose: () => void;
}

export function AddProductToWishlist({
    onAddToWishlist,
    onRequestClose,
}: AddProductToWishlistProps) {
    return (
        <span>
            Deseja adicionar aos favoritoS?
            <button onClick={onAddToWishlist}>Sim</button>
            <button onClick={onRequestClose}>Não</button>
        </span>
    )
}