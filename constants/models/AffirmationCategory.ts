export interface GalleryPreviewData {
  id: number;
  text: string;
  image: any;
}

export interface AffirmationCategory {
  title: string;
  data: GalleryPreviewData[];
}
