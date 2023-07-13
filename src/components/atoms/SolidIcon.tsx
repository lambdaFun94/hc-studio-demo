import * as React from "react";

import {
  AcademicCapIcon,
  AdjustmentsIcon,
  AnnotationIcon,
  ArchiveIcon,
  ArrowCircleDownIcon,
  ArrowCircleLeftIcon,
  ArrowCircleRightIcon,
  ArrowCircleUpIcon,
  ArrowDownIcon,
  ArrowLeftIcon,
  ArrowNarrowDownIcon,
  ArrowNarrowLeftIcon,
  ArrowNarrowRightIcon,
  ArrowNarrowUpIcon,
  ArrowRightIcon,
  ArrowSmDownIcon,
  ArrowSmLeftIcon,
  ArrowSmRightIcon,
  ArrowSmUpIcon,
  ArrowUpIcon,
  ArrowsExpandIcon,
  AtSymbolIcon,
  BackspaceIcon,
  BadgeCheckIcon,
  BanIcon,
  BeakerIcon,
  BellIcon,
  BookOpenIcon,
  BookmarkAltIcon,
  BookmarkIcon,
  BriefcaseIcon,
  CakeIcon,
  CalculatorIcon,
  CalendarIcon,
  CameraIcon,
  CashIcon,
  ChartBarIcon,
  ChartPieIcon,
  ChartSquareBarIcon,
  ChatAlt2Icon,
  ChatAltIcon,
  ChatIcon,
  CheckCircleIcon,
  CheckIcon,
  ChevronDoubleDownIcon,
  ChevronDoubleLeftIcon,
  ChevronDoubleRightIcon,
  ChevronDoubleUpIcon,
  ChevronDownIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  ChevronUpIcon,
  ChipIcon,
  ClipboardCheckIcon,
  ClipboardCopyIcon,
  ClipboardListIcon,
  ClipboardIcon,
  ClockIcon,
  CloudDownloadIcon,
  CloudUploadIcon,
  CloudIcon,
  CodeIcon,
  CogIcon,
  CollectionIcon,
  ColorSwatchIcon,
  CreditCardIcon,
  CubeTransparentIcon,
  CubeIcon,
  CurrencyBangladeshiIcon,
  CurrencyDollarIcon,
  CurrencyEuroIcon,
  CurrencyPoundIcon,
  CurrencyRupeeIcon,
  CurrencyYenIcon,
  CursorClickIcon,
  DatabaseIcon,
  DesktopComputerIcon,
  DeviceMobileIcon,
  DeviceTabletIcon,
  DocumentAddIcon,
  DocumentDownloadIcon,
  DocumentDuplicateIcon,
  DocumentRemoveIcon,
  DocumentReportIcon,
  DocumentSearchIcon,
  DocumentTextIcon,
  DocumentIcon,
  DotsCircleHorizontalIcon,
  DotsHorizontalIcon,
  DotsVerticalIcon,
  DownloadIcon,
  DuplicateIcon,
  EmojiHappyIcon,
  EmojiSadIcon,
  ExclamationCircleIcon,
  ExclamationIcon,
  ExternalLinkIcon,
  EyeOffIcon,
  EyeIcon,
  FastForwardIcon,
  FilmIcon,
  FilterIcon,
  FingerPrintIcon,
  FireIcon,
  FlagIcon,
  FolderAddIcon,
  FolderDownloadIcon,
  FolderOpenIcon,
  FolderRemoveIcon,
  FolderIcon,
  GiftIcon,
  GlobeAltIcon,
  GlobeIcon,
  HandIcon,
  HashtagIcon,
  HeartIcon,
  HomeIcon,
  IdentificationIcon,
  InboxInIcon,
  InboxIcon,
  InformationCircleIcon,
  KeyIcon,
  LibraryIcon,
  LightBulbIcon,
  LightningBoltIcon,
  LinkIcon,
  LocationMarkerIcon,
  LockClosedIcon,
  LockOpenIcon,
  LoginIcon,
  LogoutIcon,
  MailOpenIcon,
  MailIcon,
  MapIcon,
  MenuAlt1Icon,
  MenuAlt2Icon,
  MenuAlt3Icon,
  MenuAlt4Icon,
  MenuIcon,
  MicrophoneIcon,
  MinusCircleIcon,
  MinusSmIcon,
  MinusIcon,
  MoonIcon,
  MusicNoteIcon,
  NewspaperIcon,
  OfficeBuildingIcon,
  PaperAirplaneIcon,
  PaperClipIcon,
  PauseIcon,
  PencilAltIcon,
  PencilIcon,
  PhoneIncomingIcon,
  PhoneMissedCallIcon,
  PhoneOutgoingIcon,
  PhoneIcon,
  PhotographIcon,
  PlayIcon,
  PlusCircleIcon,
  PlusSmIcon,
  PlusIcon,
  PresentationChartBarIcon,
  PresentationChartLineIcon,
  PrinterIcon,
  PuzzleIcon,
  QrcodeIcon,
  QuestionMarkCircleIcon,
  ReceiptRefundIcon,
  ReceiptTaxIcon,
  RefreshIcon,
  ReplyIcon,
  RewindIcon,
  RssIcon,
  SaveAsIcon,
  SaveIcon,
  ScaleIcon,
  ScissorsIcon,
  SearchCircleIcon,
  SearchIcon,
  SelectorIcon,
  ServerIcon,
  ShareIcon,
  ShieldCheckIcon,
  ShieldExclamationIcon,
  ShoppingBagIcon,
  ShoppingCartIcon,
  SortAscendingIcon,
  SortDescendingIcon,
  SparklesIcon,
  SpeakerphoneIcon,
  StarIcon,
  StatusOfflineIcon,
  StatusOnlineIcon,
  StopIcon,
  SunIcon,
  SupportIcon,
  SwitchHorizontalIcon,
  SwitchVerticalIcon,
  TableIcon,
  TagIcon,
  TemplateIcon,
  TerminalIcon,
  ThumbDownIcon,
  ThumbUpIcon,
  TicketIcon,
  TranslateIcon,
  TrashIcon,
  TrendingDownIcon,
  TrendingUpIcon,
  TruckIcon,
  UploadIcon,
  UserAddIcon,
  UserCircleIcon,
  UserGroupIcon,
  UserRemoveIcon,
  UserIcon,
  UsersIcon,
  VariableIcon,
  VideoCameraIcon,
  ViewBoardsIcon,
  ViewGridAddIcon,
  ViewGridIcon,
  ViewListIcon,
  VolumeOffIcon,
  VolumeUpIcon,
  WifiIcon,
  XCircleIcon,
  XIcon,
  ZoomInIcon,
  ZoomOutIcon,
} from "@heroicons/react/solid";
import { IconType } from "../../types/icons";

import { HexColor } from "@yext/studio";
import { IconProps } from "./Icon";

const solidIconMap: {
  [key in IconType]: React.ElementType;
} = {
  "Academic Cap": AcademicCapIcon,
  "Adjustments": AdjustmentsIcon,
  "Annotation": AnnotationIcon,
  "Archive": ArchiveIcon,
  "Arrow Circle Down": ArrowCircleDownIcon,
  "Arrow Circle Left": ArrowCircleLeftIcon,
  "Arrow Circle Right": ArrowCircleRightIcon,
  "Arrow Circle Up": ArrowCircleUpIcon,
  "Arrow Down": ArrowDownIcon,
  "Arrow Left": ArrowLeftIcon,
  "Arrow Narrow Down": ArrowNarrowDownIcon,
  "Arrow Narrow Left": ArrowNarrowLeftIcon,
  "Arrow Narrow Right": ArrowNarrowRightIcon,
  "Arrow Narrow Up": ArrowNarrowUpIcon,
  "Arrow Right": ArrowRightIcon,
  "Arrow Small Down": ArrowSmDownIcon,
  "Arrow Small Left": ArrowSmLeftIcon,
  "Arrow Small Right": ArrowSmRightIcon,
  "Arrow Small Up": ArrowSmUpIcon,
  "Arrow Up": ArrowUpIcon,
  "Arrows Expand": ArrowsExpandIcon,
  "At Symbol": AtSymbolIcon,
  "Backspace": BackspaceIcon,
  "Badge Check": BadgeCheckIcon,
  "Ban": BanIcon,
  "Beaker": BeakerIcon,
  "Bell": BellIcon,
  "Book Open": BookOpenIcon,
  "Bookmark Alt": BookmarkAltIcon,
  "Bookmark": BookmarkIcon,
  "Briefcase": BriefcaseIcon,
  "Cake": CakeIcon,
  "Calculator": CalculatorIcon,
  "Calendar": CalendarIcon,
  "Camera": CameraIcon,
  "Cash": CashIcon,
  "Chart Bar": ChartBarIcon,
  "Chart Pie": ChartPieIcon,
  "Chart Square Bar": ChartSquareBarIcon,
  "Chat Alt 2": ChatAlt2Icon,
  "Chat Alt": ChatAltIcon,
  "Chat": ChatIcon,
  "Check Circle": CheckCircleIcon,
  "Check": CheckIcon,
  "Chevron Double Down": ChevronDoubleDownIcon,
  "Chevron Double Left": ChevronDoubleLeftIcon,
  "Chevron Double Right": ChevronDoubleRightIcon,
  "Chevron Double Up": ChevronDoubleUpIcon,
  "Chevron Down": ChevronDownIcon,
  "Chevron Left": ChevronLeftIcon,
  "Chevron Right": ChevronRightIcon,
  "Chevron Up": ChevronUpIcon,
  "Chip": ChipIcon,
  "Clipboard Check": ClipboardCheckIcon,
  "Clipboard Copy": ClipboardCopyIcon,
  "Clipboard List": ClipboardListIcon,
  "Clipboard": ClipboardIcon,
  "Clock": ClockIcon,
  "Cloud Download": CloudDownloadIcon,
  "Cloud Upload": CloudUploadIcon,
  "Cloud": CloudIcon,
  "Code": CodeIcon,
  "Cog": CogIcon,
  "Collection": CollectionIcon,
  "Color Swatch": ColorSwatchIcon,
  "Credit Card": CreditCardIcon,
  "Cube Transparent": CubeTransparentIcon,
  "Cube": CubeIcon,
  "Currency Bangladeshi": CurrencyBangladeshiIcon,
  "Currency Dollar": CurrencyDollarIcon,
  "Currency Euro": CurrencyEuroIcon,
  "Currency Pound": CurrencyPoundIcon,
  "Currency Rupee": CurrencyRupeeIcon,
  "Currency Yen": CurrencyYenIcon,
  "Cursor Click": CursorClickIcon,
  "Database": DatabaseIcon,
  "Desktop Computer": DesktopComputerIcon,
  "Device Mobile": DeviceMobileIcon,
  "Device Tablet": DeviceTabletIcon,
  "Document Add": DocumentAddIcon,
  "Document Download": DocumentDownloadIcon,
  "Document Duplicate": DocumentDuplicateIcon,
  "Document Remove": DocumentRemoveIcon,
  "Document Report": DocumentReportIcon,
  "Document Search": DocumentSearchIcon,
  "Document Text": DocumentTextIcon,
  "Document": DocumentIcon,
  "Dots Circle Horizontal": DotsCircleHorizontalIcon,
  "Dots Horizontal": DotsHorizontalIcon,
  "Dots Vertical": DotsVerticalIcon,
  "Download": DownloadIcon,
  "Duplicate": DuplicateIcon,
  "Emoji Happy": EmojiHappyIcon,
  "Emoji Sad": EmojiSadIcon,
  "Exclamation Circle": ExclamationCircleIcon,
  "Exclamation": ExclamationIcon,
  "External Link": ExternalLinkIcon,
  "Eye Off": EyeOffIcon,
  "Eye": EyeIcon,
  "Fast Forward": FastForwardIcon,
  "Film": FilmIcon,
  "Filter": FilterIcon,
  "Finger Print": FingerPrintIcon,
  "Fire": FireIcon,
  "Flag": FlagIcon,
  "Folder Add": FolderAddIcon,
  "Folder Download": FolderDownloadIcon,
  "Folder Open": FolderOpenIcon,
  "Folder Remove": FolderRemoveIcon,
  "Folder": FolderIcon,
  "Gift": GiftIcon,
  "Globe Alt": GlobeAltIcon,
  "Globe": GlobeIcon,
  "Hand": HandIcon,
  "Hashtag": HashtagIcon,
  "Heart": HeartIcon,
  "Home": HomeIcon,
  "Identification": IdentificationIcon,
  "Inbox In": InboxInIcon,
  "Inbox": InboxIcon,
  "Information Circle": InformationCircleIcon,
  "Key": KeyIcon,
  "Library": LibraryIcon,
  "Light Bulb": LightBulbIcon,
  "Lightning Bolt": LightningBoltIcon,
  "Link": LinkIcon,
  "Location Marker": LocationMarkerIcon,
  "Lock Closed": LockClosedIcon,
  "Lock Open": LockOpenIcon,
  "Login": LoginIcon,
  "Logout": LogoutIcon,
  "Mail Open": MailOpenIcon,
  "Mail": MailIcon,
  "Map": MapIcon,
  "Menu Alt 1": MenuAlt1Icon,
  "Menu Alt 2": MenuAlt2Icon,
  "Menu Alt 3": MenuAlt3Icon,
  "Menu Alt 4": MenuAlt4Icon,
  "Menu": MenuIcon,
  "Microphone": MicrophoneIcon,
  "Minus Circle": MinusCircleIcon,
  "Minus Sm": MinusSmIcon,
  "Minus": MinusIcon,
  "Moon": MoonIcon,
  "Music Note": MusicNoteIcon,
  "Newspaper": NewspaperIcon,
  "Office Building": OfficeBuildingIcon,
  "Paper Airplane": PaperAirplaneIcon,
  "Paper Clip": PaperClipIcon,
  "Pause": PauseIcon,
  "Pencil Alt": PencilAltIcon,
  "Pencil": PencilIcon,
  "Phone Incoming": PhoneIncomingIcon,
  "Phone Missed Call": PhoneMissedCallIcon,
  "Phone Outgoing": PhoneOutgoingIcon,
  "Phone": PhoneIcon,
  "Photograph": PhotographIcon,
  "Play": PlayIcon,
  "Plus Circle": PlusCircleIcon,
  "Plus Sm": PlusSmIcon,
  "Plus": PlusIcon,
  "Presentation Chart Bar": PresentationChartBarIcon,
  "Presentation Chart Line": PresentationChartLineIcon,
  "Printer": PrinterIcon,
  "Puzzle": PuzzleIcon,
  "Qrcode": QrcodeIcon,
  "Question Mark Circle": QuestionMarkCircleIcon,
  "Receipt Refund": ReceiptRefundIcon,
  "Receipt Tax": ReceiptTaxIcon,
  "Refresh": RefreshIcon,
  "Reply": ReplyIcon,
  "Rewind": RewindIcon,
  "Rss": RssIcon,
  "Save As": SaveAsIcon,
  "Save": SaveIcon,
  "Scale": ScaleIcon,
  "Scissors": ScissorsIcon,
  "Search Circle": SearchCircleIcon,
  "Search": SearchIcon,
  "Selector": SelectorIcon,
  "Server": ServerIcon,
  "Share": ShareIcon,
  "Shield Check": ShieldCheckIcon,
  "Shield Exclamation": ShieldExclamationIcon,
  "Shopping Bag": ShoppingBagIcon,
  "Shopping Cart": ShoppingCartIcon,
  "Sort Ascending": SortAscendingIcon,
  "Sort Descending": SortDescendingIcon,
  "Sparkles": SparklesIcon,
  "Speakerphone": SpeakerphoneIcon,
  "Star": StarIcon,
  "Status Offline": StatusOfflineIcon,
  "Status Online": StatusOnlineIcon,
  "Stop": StopIcon,
  "Sun": SunIcon,
  "Support": SupportIcon,
  "Switch Horizontal": SwitchHorizontalIcon,
  "Switch Vertical": SwitchVerticalIcon,
  "Table": TableIcon,
  "Tag": TagIcon,
  "Template": TemplateIcon,
  "Terminal": TerminalIcon,
  "Thumb Down": ThumbDownIcon,
  "Thumb Up": ThumbUpIcon,
  "Ticket": TicketIcon,
  "Translate": TranslateIcon,
  "Trash": TrashIcon,
  "Trending Down": TrendingDownIcon,
  "Trending Up": TrendingUpIcon,
  "Truck": TruckIcon,
  "Upload": UploadIcon,
  "User Add": UserAddIcon,
  "User Circle": UserCircleIcon,
  "User Group": UserGroupIcon,
  "User Remove": UserRemoveIcon,
  "User": UserIcon,
  "Users": UsersIcon,
  "Variable": VariableIcon,
  "Video Camera": VideoCameraIcon,
  "View Boards": ViewBoardsIcon,
  "View Grid Add": ViewGridAddIcon,
  "View Grid": ViewGridIcon,
  "View List": ViewListIcon,
  "Volume Off": VolumeOffIcon,
  "Volume Up": VolumeUpIcon,
  "Wifi": WifiIcon,
  "X Circle": XCircleIcon,
  "X": XIcon,
  "Zoom In": ZoomInIcon,
  "Zoom Out": ZoomOutIcon,
};

export const initialProps: Required<IconProps> = {
  name: "Star",
  style: "solid",
  color: "#111827",
};

export default function SolidIcon({
  name,
  classname,
  color,
}: {
  name?: IconType;
  classname?: string;
  color?: HexColor;
}) {
  const IconComponent = solidIconMap[name ?? "Star"];
  return <IconComponent className={classname} style={{ fill: color }} />;
}