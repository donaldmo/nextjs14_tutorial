type ReviewDetailProp = {
    params: {
        productId: string,
        reviewId: string
    }
}

export default function ReviewDetail({ params }: ReviewDetailProp) {
    const { productId, reviewId } = params
    return (
        <>
            <h1>Review {productId} for product {reviewId}</h1>
        </>
    )
}