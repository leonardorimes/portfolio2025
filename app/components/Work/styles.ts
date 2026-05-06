import styled from "styled-components";

export const Section = styled.section`
  text-align: center;
  padding: 100px 20px;
  max-width: 1200px;
  margin: 0 auto;

  @media (max-width: 768px) {
    padding: 60px 15px;
  }
`;

export const Title = styled.h2`
  font-size: clamp(3rem, 4vw, 4.5rem);
  font-weight: 800;
  margin-bottom: 12px;
  color: #111;
  letter-spacing: -1px;
`;

export const Subtitle = styled.p`
  color: #64748b;
  font-size: clamp(1.6rem, 2vw, 1.8rem);
  line-height: 1.5;
  margin-bottom: 60px;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
`;

export const Grid = styled.div`
  display: grid;
  gap: 40px;
  grid-template-columns: repeat(2, 1fr);
  text-align: left;

  @media (max-width: 900px) {
    gap: 30px;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 40px;
  }
`;

export const CardWrapper = styled.a`
  display: flex;
  flex-direction: column;
  background: #ffffff;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.03);
  border: 1px solid rgba(0, 0, 0, 0.04);
  text-decoration: none;
  color: inherit;
  transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
  position: relative;
  height: 100%;
  transform-origin: center bottom;

  &:hover {
    transform: translateY(-8px) scale(1.01);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.08);
    border-color: rgba(0, 0, 0, 0.08);

    .card-image {
      transform: scale(1.05);
    }
    
    .view-project {
      background: #0f172a;
      color: #ffffff;
      
      svg {
        transform: translateX(4px);
      }
    }
  }
`;

export const ImageContainer = styled.div`
  width: 100%;
  height: 260px;
  overflow: hidden;
  position: relative;
  background: #f8fafc;
  border-bottom: 1px solid rgba(0, 0, 0, 0.04);
  
  @media (max-width: 768px) {
    height: 220px;
  }
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center top;
  transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
`;

export const ContentContainer = styled.div`
  padding: 32px 28px;
  display: flex;
  flex-direction: column;
  flex: 1;
`;

export const Meta = styled.div`
  font-size: 1.2rem;
  font-weight: 700;
  color: #8b5cf6;
  margin-bottom: 12px;
  text-transform: uppercase;
  letter-spacing: 1px;
`;

export const CardTitle = styled.h3`
  font-size: 2.2rem;
  font-weight: 800;
  margin-bottom: 16px;
  color: #0f172a;
  letter-spacing: -0.5px;
`;

export const Description = styled.p`
  font-size: 1.5rem;
  color: #475569;
  line-height: 1.7;
  margin-bottom: 24px;
  flex: 1;
`;

export const Tags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 24px;
`;

export const Tag = styled.span`
  background: rgba(139, 92, 246, 0.08);
  color: #7c3aed;
  padding: 6px 14px;
  border-radius: 20px;
  font-size: 1.2rem;
  font-weight: 600;
`;

export const ViewProject = styled.div`
  font-size: 1.4rem;
  font-weight: 700;
  color: #0f172a;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 12px 24px;
  border-radius: 12px;
  background: #f1f5f9;
  transition: all 0.3s ease;
  margin-top: auto;
  align-self: flex-start;

  svg {
    width: 18px;
    height: 18px;
    transition: transform 0.3s ease;
  }
`;
