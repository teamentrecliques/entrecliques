import React, { useMemo } from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import BackgroundImage from 'gatsby-background-image';
import * as S from './card.styled';

const Card = props => {
  const data = useStaticQuery(graphql`
    query {
      allFile(filter: { internal: { mediaType: { regex: "images/" } } }) {
        edges {
          node {
            relativePath
            childImageSharp {
              fluid(maxWidth: 400, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  `);

  const match = useMemo(() =>
    data.allFile.edges.find(({ node }) => props.image === node.relativePath),
  );

  return (
    <S.Card>
      <S.CardContent>
        {props.data.map((content, index) => <div key={index}>
          <div className="card-item">
            <a href={content.link} target="_blank">{content.title}</a>
            <div className="card-desc">{content.description}</div>
          </div>
        </div>)}
      </S.CardContent>
      <S.SeeMore className="see-more">Ver mais [+]</S.SeeMore>
      <BackgroundImage
        tag="div"
        className="image"
        fluid={match.node.childImageSharp.fluid}
      />
    </S.Card>
  );
};

export default Card;
