// Módulo sin red (lo importan también los islands de cliente).
// La versión de Data Dragon ya NO se hardcodea: se resuelve dinámicamente en
// champs.js (getVersion → siempre el último parche) y se pasa por props a los
// componentes, que arman las URLs de imagen con ddImg().
export const DDRAGON_IMG = 'https://ddragon.leagueoflegends.com/cdn/img'

// Construye la URL de un asset versionado de Data Dragon.
// ej: ddImg(version, 'champion', 'Aatrox.png')
export const ddImg = (version, type, file) =>
  `https://ddragon.leagueoflegends.com/cdn/${version}/img/${type}/${file}`
