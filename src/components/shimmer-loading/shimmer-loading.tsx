import {
  ShimmerButton,
  ShimmerGroup,
  ShimmerImg,
  ShimmerLoadingContainer,
  ShimmerPrice,
  ShimmerTypography,
} from './shimmer-loading.styles'

export function ShimmerLoading() {
  return (
    <ShimmerLoadingContainer>
      <ShimmerImg />
      <ShimmerGroup>
        <ShimmerTypography width="100%" />
        <ShimmerPrice />
      </ShimmerGroup>
      <ShimmerTypography />
      <ShimmerButton />
    </ShimmerLoadingContainer>
  )
}
