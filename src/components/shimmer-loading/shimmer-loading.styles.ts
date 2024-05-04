import { motion } from "framer-motion";
import styled, { keyframes } from "styled-components";

const shimmer = keyframes`
  0% {
    background-position: -200% 0;
  }
  100% {
    background-position: 200% 0;
  }

`;
export const ShimmerLoadingContainer = styled.div`
  display: flex;
  margin-bottom: 1.938rem;
  flex-direction: column;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.14);
  background-color: ${({ theme }) => theme.colors.white};
  justify-content: space-between;
  border-radius: 0.5rem;
  box-sizing: border-box;
  padding-top: 1.125rem;
  height: auto;
  width: 15.598rem;
`;

export const ShimmerImg = styled(motion.div)`
  align-self: center;
  border-radius: 0.313rem;
  padding: 0 0.875rem 0 0.875rem;
  width: 13.598rem;
  height: 11.875rem;
  background: linear-gradient(-90deg, #eee 0%, #f0f0f0 50%, #eee 100%);
  background-size: 200% 100%;
  animation: ${shimmer} 1s infinite linear;
`;

export const ShimmerGroup = styled.div`
  display: flex;
  justify-content: space-between;
  column-gap: 2rem;
  margin: 0.875rem 0 0.5rem 0;
  padding: 0 0.875rem 0 0.875rem;
`;

export const ShimmerPrice = styled(motion.div)`
  height: 2rem;
  border-radius: 0.313rem;
  padding: 0.25rem 0.5rem 0.25rem 0.5rem;
  background: linear-gradient(-90deg, #eee 0%, #f0f0f0 50%, #eee 100%);
  background-size: 200% 100%;
  animation: ${shimmer} 1s infinite linear;
`;

type ShimmerTypographyProps = {
  width?: string;
  margin?: string;
};

export const ShimmerTypography = styled(motion.div)<ShimmerTypographyProps>`
  display: flex;
  ${({ width }) => `width: ${width ? width : "auto"};`};
  height: 2rem;
  border-radius: 0.313rem;
  ${({ margin }) => (margin ? `margin: ${margin};` : "")};
  background: linear-gradient(-90deg, #eee 0%, #f0f0f0 50%, #eee 100%);
  background-size: 200% 100%;
  animation: ${shimmer} 1s infinite alternate linear;
`;

export const ShimmerButton = styled(motion.div)`
  display: flex;
  width: 100%;
  height: 10%;
  margin-top: 0.75rem;
  border-radius: 0 0 0.313rem 0.313rem;
  background: linear-gradient(-90deg, #eee 0%, #f0f0f0 50%, #eee 100%);
  background-size: 200% 100%;
  animation: ${shimmer} 1s infinite linear;
`;
