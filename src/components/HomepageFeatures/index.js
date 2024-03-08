import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";

const FeatureList = [
  {
    title: "Agentes",
    Svg: require("@site/static/img/illustration_server.svg").default,
    description: <>Crie aplicações de IA incríveis.</>,
  },
  {
    title: "Papéis",
    Svg: require("@site/static/img/illustration_feature_store.svg").default,
    description: <>Configure seus agentes para atuarem como personas.</>,
  },
  {
    title: "Ferramentas",
    Svg: require("@site/static/img/illustration_automl.svg").default,
    description: <>Adicione capacidades e habilidades em seus agentes.</>,
  },
];

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
