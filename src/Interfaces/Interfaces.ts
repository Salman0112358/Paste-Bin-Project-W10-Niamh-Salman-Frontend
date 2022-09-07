export interface IPaste {
  paste_id: number;
  title: string;
  body: string;
  date: string;
}

export interface NewPasteProps {
  inputTitle: string;
  setTitle: React.Dispatch<React.SetStateAction<string>>;
  inputBody: string;
  setBody: React.Dispatch<React.SetStateAction<string>>;
  uploadTrigger: boolean;
  setUploadTrigger: React.Dispatch<React.SetStateAction<boolean>>;
  showOnlyTitles: boolean;
  setShowOnlyTitles: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface PasteListProps {
  pasteArray: IPaste[];
  setPasteArray: React.Dispatch<React.SetStateAction<IPaste[]>>;
  summaryDisplay: boolean;
  setSummaryDisplay: React.Dispatch<React.SetStateAction<boolean>>;
  showOnlyTitles: boolean;
}

export interface InterfaceUseStateManager {
  inputTitle: string;
  setTitle: React.Dispatch<React.SetStateAction<string>>;
  inputBody: string;
  setBody: React.Dispatch<React.SetStateAction<string>>;
  uploadTrigger: boolean;
  setUploadTrigger: React.Dispatch<React.SetStateAction<boolean>>;
  showOnlyTitles: boolean;
  setShowOnlyTitles: React.Dispatch<React.SetStateAction<boolean>>;
  pasteArray: IPaste[];
  setPasteArray: React.Dispatch<React.SetStateAction<IPaste[]>>;
  summaryDisplay: boolean;
  setSummaryDisplay: React.Dispatch<React.SetStateAction<boolean>>;

}
