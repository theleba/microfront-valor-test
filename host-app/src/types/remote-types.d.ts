declare module 'catalog_app/CatalogPage' {
  const CatalogPage: React.ComponentType;
  export default CatalogPage;
}

declare module 'detail_app/DetailPage' {
  const DetailPage: React.ComponentType<{ pokemonName: string }>;
  export default DetailPage;
}
