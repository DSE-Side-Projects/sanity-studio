import type {
  SanityReference,
  SanityAsset,
  SanityImage,
  SanityFile,
  SanityGeoPoint,
  SanityBlock,
  SanityDocument,
  SanityImageCrop,
  SanityImageHotspot,
} from "sanity-codegen";

export type {
  SanityReference,
  SanityAsset,
  SanityImage,
  SanityFile,
  SanityGeoPoint,
  SanityBlock,
  SanityDocument,
  SanityImageCrop,
  SanityImageHotspot,
};

/**
 * App
 *
 *
 */
export interface App extends SanityDocument {
  _type: "app";

  /**
   * Title — `string`
   *
   *
   */
  title?: string;

  /**
   * Site URL — `url`
   *
   *
   */
  url?: string;

  /**
   * Github repo — `url`
   *
   *
   */
  github?: string;

  /**
   * Slug — `slug`
   *
   *
   */
  slug?: { _type: "slug"; current: string };

  /**
   * Description — `blockContent`
   *
   *
   */
  description?: BlockContent;

  /**
   * Technology — `reference`
   *
   *
   */
  technology?: SanityReference<Stack>;

  /**
   * Screenshot — `screenshot`
   *
   *
   */
  screenshot?: Screenshot;

  /**
   * Auth0 Quickstart URL — `url`
   *
   *
   */
  quickstart?: string;

  /**
   * Auth0 Docs URL — `url`
   *
   *
   */
  docs?: string;

  /**
   * Deployment Service — `reference`
   *
   *
   */
  deploy?: SanityReference<Deployment>;
}

/**
 * Stack
 *
 *
 */
export interface Stack extends SanityDocument {
  _type: "stack";

  /**
   * title — `string`
   *
   *
   */
  title?: string;

  /**
   * Slug — `slug`
   *
   *
   */
  slug?: { _type: "slug"; current: string };

  /**
   * Languages — `array`
   *
   *
   */
  languages?: Array<SanityReference<Language>>;

  /**
   * Stack Docs URL — `url`
   *
   *
   */
  docs?: string;

  /**
   * Stack Logo — `image`
   *
   *
   */
  logo?: {
    _type: "logo";
    asset: SanityAsset;
    crop?: SanityImageCrop;
    hotspot?: SanityImageHotspot;
  };
}

/**
 * Language
 *
 *
 */
export interface Language extends SanityDocument {
  _type: "language";

  /**
   * Title — `string`
   *
   *
   */
  title?: string;

  /**
   * Slug — `slug`
   *
   *
   */
  slug?: { _type: "slug"; current: string };

  /**
   * Helpful resources — `array`
   *
   *
   */
  resources?: Array<string>;

  /**
   * Specs URL — `url`
   *
   *
   */
  specs?: string;

  /**
   * Language Logo — `image`
   *
   *
   */
  logo?: {
    _type: "logo";
    asset: SanityAsset;
    crop?: SanityImageCrop;
    hotspot?: SanityImageHotspot;
  };
}

/**
 * Deployment
 *
 *
 */
export interface Deployment extends SanityDocument {
  _type: "deployment";

  /**
   * Title — `string`
   *
   *
   */
  title?: string;

  /**
   * Deployment Button Image URL — `url`
   *
   *
   */
  button?: string;

  /**
   * Deployment URL — `url`
   *
   *
   */
  deploymentUrl?: string;

  /**
   * Service Logo — `image`
   *
   *
   */
  logo?: {
    _type: "logo";
    asset: SanityAsset;
    crop?: SanityImageCrop;
    hotspot?: SanityImageHotspot;
  };
}

export type Screenshot = {
  _type: "screenshot";
  /**
   * Image — `image`
   *
   *
   */
  image?: {
    _type: "image";
    asset: SanityAsset;
    crop?: SanityImageCrop;
    hotspot?: SanityImageHotspot;
  };

  /**
   * Screnshot Metadata — `metadata`
   *
   *
   */
  screenshotMetadata?: Metadata;
};

export type Metadata = {
  _type: "metadata";
  /**
   * Timestamp — `datetime`
   *
   *
   */
  timestamp?: string;

  /**
   * Source — `string`
   *
   *
   */
  source?: "user" | "function";
};

export type BlockContent = Array<
  | SanityBlock
  | {
      _type: "image";
      _key: string;
      asset: SanityAsset;
      crop?: SanityImageCrop;
      hotspot?: SanityImageHotspot;
    }
>;

export type Documents = App | Stack | Language | Deployment;
