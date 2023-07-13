import * as React from "react";

import {
  AcademicCapIcon as OutlineAcademicCapIcon,
  AdjustmentsIcon as OutlineAdjustmentsIcon,
  AnnotationIcon as OutlineAnnotationIcon,
  ArchiveIcon as OutlineArchiveIcon,
  ArrowCircleDownIcon as OutlineArrowCircleDownIcon,
  ArrowCircleLeftIcon as OutlineArrowCircleLeftIcon,
  ArrowCircleRightIcon as OutlineArrowCircleRightIcon,
  ArrowCircleUpIcon as OutlineArrowCircleUpIcon,
  ArrowDownIcon as OutlineArrowDownIcon,
  ArrowLeftIcon as OutlineArrowLeftIcon,
  ArrowNarrowDownIcon as OutlineArrowNarrowDownIcon,
  ArrowNarrowLeftIcon as OutlineArrowNarrowLeftIcon,
  ArrowNarrowRightIcon as OutlineArrowNarrowRightIcon,
  ArrowNarrowUpIcon as OutlineArrowNarrowUpIcon,
  ArrowRightIcon as OutlineArrowRightIcon,
  ArrowSmDownIcon as OutlineArrowSmDownIcon,
  ArrowSmLeftIcon as OutlineArrowSmLeftIcon,
  ArrowSmRightIcon as OutlineArrowSmRightIcon,
  ArrowSmUpIcon as OutlineArrowSmUpIcon,
  ArrowUpIcon as OutlineArrowUpIcon,
  ArrowsExpandIcon as OutlineArrowsExpandIcon,
  AtSymbolIcon as OutlineAtSymbolIcon,
  BackspaceIcon as OutlineBackspaceIcon,
  BadgeCheckIcon as OutlineBadgeCheckIcon,
  BanIcon as OutlineBanIcon,
  BeakerIcon as OutlineBeakerIcon,
  BellIcon as OutlineBellIcon,
  BookOpenIcon as OutlineBookOpenIcon,
  BookmarkAltIcon as OutlineBookmarkAltIcon,
  BookmarkIcon as OutlineBookmarkIcon,
  BriefcaseIcon as OutlineBriefcaseIcon,
  CakeIcon as OutlineCakeIcon,
  CalculatorIcon as OutlineCalculatorIcon,
  CalendarIcon as OutlineCalendarIcon,
  CameraIcon as OutlineCameraIcon,
  CashIcon as OutlineCashIcon,
  ChartBarIcon as OutlineChartBarIcon,
  ChartPieIcon as OutlineChartPieIcon,
  ChartSquareBarIcon as OutlineChartSquareBarIcon,
  ChatAlt2Icon as OutlineChatAlt2Icon,
  ChatAltIcon as OutlineChatAltIcon,
  ChatIcon as OutlineChatIcon,
  CheckCircleIcon as OutlineCheckCircleIcon,
  CheckIcon as OutlineCheckIcon,
  ChevronDoubleDownIcon as OutlineChevronDoubleDownIcon,
  ChevronDoubleLeftIcon as OutlineChevronDoubleLeftIcon,
  ChevronDoubleRightIcon as OutlineChevronDoubleRightIcon,
  ChevronDoubleUpIcon as OutlineChevronDoubleUpIcon,
  ChevronDownIcon as OutlineChevronDownIcon,
  ChevronLeftIcon as OutlineChevronLeftIcon,
  ChevronRightIcon as OutlineChevronRightIcon,
  ChevronUpIcon as OutlineChevronUpIcon,
  ChipIcon as OutlineChipIcon,
  ClipboardCheckIcon as OutlineClipboardCheckIcon,
  ClipboardCopyIcon as OutlineClipboardCopyIcon,
  ClipboardListIcon as OutlineClipboardListIcon,
  ClipboardIcon as OutlineClipboardIcon,
  ClockIcon as OutlineClockIcon,
  CloudDownloadIcon as OutlineCloudDownloadIcon,
  CloudUploadIcon as OutlineCloudUploadIcon,
  CloudIcon as OutlineCloudIcon,
  CodeIcon as OutlineCodeIcon,
  CogIcon as OutlineCogIcon,
  CollectionIcon as OutlineCollectionIcon,
  ColorSwatchIcon as OutlineColorSwatchIcon,
  CreditCardIcon as OutlineCreditCardIcon,
  CubeTransparentIcon as OutlineCubeTransparentIcon,
  CubeIcon as OutlineCubeIcon,
  CurrencyBangladeshiIcon as OutlineCurrencyBangladeshiIcon,
  CurrencyDollarIcon as OutlineCurrencyDollarIcon,
  CurrencyEuroIcon as OutlineCurrencyEuroIcon,
  CurrencyPoundIcon as OutlineCurrencyPoundIcon,
  CurrencyRupeeIcon as OutlineCurrencyRupeeIcon,
  CurrencyYenIcon as OutlineCurrencyYenIcon,
  CursorClickIcon as OutlineCursorClickIcon,
  DatabaseIcon as OutlineDatabaseIcon,
  DesktopComputerIcon as OutlineDesktopComputerIcon,
  DeviceMobileIcon as OutlineDeviceMobileIcon,
  DeviceTabletIcon as OutlineDeviceTabletIcon,
  DocumentAddIcon as OutlineDocumentAddIcon,
  DocumentDownloadIcon as OutlineDocumentDownloadIcon,
  DocumentDuplicateIcon as OutlineDocumentDuplicateIcon,
  DocumentRemoveIcon as OutlineDocumentRemoveIcon,
  DocumentReportIcon as OutlineDocumentReportIcon,
  DocumentSearchIcon as OutlineDocumentSearchIcon,
  DocumentTextIcon as OutlineDocumentTextIcon,
  DocumentIcon as OutlineDocumentIcon,
  DotsCircleHorizontalIcon as OutlineDotsCircleHorizontalIcon,
  DotsHorizontalIcon as OutlineDotsHorizontalIcon,
  DotsVerticalIcon as OutlineDotsVerticalIcon,
  DownloadIcon as OutlineDownloadIcon,
  DuplicateIcon as OutlineDuplicateIcon,
  EmojiHappyIcon as OutlineEmojiHappyIcon,
  EmojiSadIcon as OutlineEmojiSadIcon,
  ExclamationCircleIcon as OutlineExclamationCircleIcon,
  ExclamationIcon as OutlineExclamationIcon,
  ExternalLinkIcon as OutlineExternalLinkIcon,
  EyeOffIcon as OutlineEyeOffIcon,
  EyeIcon as OutlineEyeIcon,
  FastForwardIcon as OutlineFastForwardIcon,
  FilmIcon as OutlineFilmIcon,
  FilterIcon as OutlineFilterIcon,
  FingerPrintIcon as OutlineFingerPrintIcon,
  FireIcon as OutlineFireIcon,
  FlagIcon as OutlineFlagIcon,
  FolderAddIcon as OutlineFolderAddIcon,
  FolderDownloadIcon as OutlineFolderDownloadIcon,
  FolderOpenIcon as OutlineFolderOpenIcon,
  FolderRemoveIcon as OutlineFolderRemoveIcon,
  FolderIcon as OutlineFolderIcon,
  GiftIcon as OutlineGiftIcon,
  GlobeAltIcon as OutlineGlobeAltIcon,
  GlobeIcon as OutlineGlobeIcon,
  HandIcon as OutlineHandIcon,
  HashtagIcon as OutlineHashtagIcon,
  HeartIcon as OutlineHeartIcon,
  HomeIcon as OutlineHomeIcon,
  IdentificationIcon as OutlineIdentificationIcon,
  InboxInIcon as OutlineInboxInIcon,
  InboxIcon as OutlineInboxIcon,
  InformationCircleIcon as OutlineInformationCircleIcon,
  KeyIcon as OutlineKeyIcon,
  LibraryIcon as OutlineLibraryIcon,
  LightBulbIcon as OutlineLightBulbIcon,
  LightningBoltIcon as OutlineLightningBoltIcon,
  LinkIcon as OutlineLinkIcon,
  LocationMarkerIcon as OutlineLocationMarkerIcon,
  LockClosedIcon as OutlineLockClosedIcon,
  LockOpenIcon as OutlineLockOpenIcon,
  LoginIcon as OutlineLoginIcon,
  LogoutIcon as OutlineLogoutIcon,
  MailOpenIcon as OutlineMailOpenIcon,
  MailIcon as OutlineMailIcon,
  MapIcon as OutlineMapIcon,
  MenuAlt1Icon as OutlineMenuAlt1Icon,
  MenuAlt2Icon as OutlineMenuAlt2Icon,
  MenuAlt3Icon as OutlineMenuAlt3Icon,
  MenuAlt4Icon as OutlineMenuAlt4Icon,
  MenuIcon as OutlineMenuIcon,
  MicrophoneIcon as OutlineMicrophoneIcon,
  MinusCircleIcon as OutlineMinusCircleIcon,
  MinusSmIcon as OutlineMinusSmIcon,
  MinusIcon as OutlineMinusIcon,
  MoonIcon as OutlineMoonIcon,
  MusicNoteIcon as OutlineMusicNoteIcon,
  NewspaperIcon as OutlineNewspaperIcon,
  OfficeBuildingIcon as OutlineOfficeBuildingIcon,
  PaperAirplaneIcon as OutlinePaperAirplaneIcon,
  PaperClipIcon as OutlinePaperClipIcon,
  PauseIcon as OutlinePauseIcon,
  PencilAltIcon as OutlinePencilAltIcon,
  PencilIcon as OutlinePencilIcon,
  PhoneIncomingIcon as OutlinePhoneIncomingIcon,
  PhoneMissedCallIcon as OutlinePhoneMissedCallIcon,
  PhoneOutgoingIcon as OutlinePhoneOutgoingIcon,
  PhoneIcon as OutlinePhoneIcon,
  PhotographIcon as OutlinePhotographIcon,
  PlayIcon as OutlinePlayIcon,
  PlusCircleIcon as OutlinePlusCircleIcon,
  PlusSmIcon as OutlinePlusSmIcon,
  PlusIcon as OutlinePlusIcon,
  PresentationChartBarIcon as OutlinePresentationChartBarIcon,
  PresentationChartLineIcon as OutlinePresentationChartLineIcon,
  PrinterIcon as OutlinePrinterIcon,
  PuzzleIcon as OutlinePuzzleIcon,
  QrcodeIcon as OutlineQrcodeIcon,
  QuestionMarkCircleIcon as OutlineQuestionMarkCircleIcon,
  ReceiptRefundIcon as OutlineReceiptRefundIcon,
  ReceiptTaxIcon as OutlineReceiptTaxIcon,
  RefreshIcon as OutlineRefreshIcon,
  ReplyIcon as OutlineReplyIcon,
  RewindIcon as OutlineRewindIcon,
  RssIcon as OutlineRssIcon,
  SaveAsIcon as OutlineSaveAsIcon,
  SaveIcon as OutlineSaveIcon,
  ScaleIcon as OutlineScaleIcon,
  ScissorsIcon as OutlineScissorsIcon,
  SearchCircleIcon as OutlineSearchCircleIcon,
  SearchIcon as OutlineSearchIcon,
  SelectorIcon as OutlineSelectorIcon,
  ServerIcon as OutlineServerIcon,
  ShareIcon as OutlineShareIcon,
  ShieldCheckIcon as OutlineShieldCheckIcon,
  ShieldExclamationIcon as OutlineShieldExclamationIcon,
  ShoppingBagIcon as OutlineShoppingBagIcon,
  ShoppingCartIcon as OutlineShoppingCartIcon,
  SortAscendingIcon as OutlineSortAscendingIcon,
  SortDescendingIcon as OutlineSortDescendingIcon,
  SparklesIcon as OutlineSparklesIcon,
  SpeakerphoneIcon as OutlineSpeakerphoneIcon,
  StarIcon as OutlineStarIcon,
  StatusOfflineIcon as OutlineStatusOfflineIcon,
  StatusOnlineIcon as OutlineStatusOnlineIcon,
  StopIcon as OutlineStopIcon,
  SunIcon as OutlineSunIcon,
  SupportIcon as OutlineSupportIcon,
  SwitchHorizontalIcon as OutlineSwitchHorizontalIcon,
  SwitchVerticalIcon as OutlineSwitchVerticalIcon,
  TableIcon as OutlineTableIcon,
  TagIcon as OutlineTagIcon,
  TemplateIcon as OutlineTemplateIcon,
  TerminalIcon as OutlineTerminalIcon,
  ThumbDownIcon as OutlineThumbDownIcon,
  ThumbUpIcon as OutlineThumbUpIcon,
  TicketIcon as OutlineTicketIcon,
  TranslateIcon as OutlineTranslateIcon,
  TrashIcon as OutlineTrashIcon,
  TrendingDownIcon as OutlineTrendingDownIcon,
  TrendingUpIcon as OutlineTrendingUpIcon,
  TruckIcon as OutlineTruckIcon,
  UploadIcon as OutlineUploadIcon,
  UserAddIcon as OutlineUserAddIcon,
  UserCircleIcon as OutlineUserCircleIcon,
  UserGroupIcon as OutlineUserGroupIcon,
  UserRemoveIcon as OutlineUserRemoveIcon,
  UserIcon as OutlineUserIcon,
  UsersIcon as OutlineUsersIcon,
  VariableIcon as OutlineVariableIcon,
  VideoCameraIcon as OutlineVideoCameraIcon,
  ViewBoardsIcon as OutlineViewBoardsIcon,
  ViewGridAddIcon as OutlineViewGridAddIcon,
  ViewGridIcon as OutlineViewGridIcon,
  ViewListIcon as OutlineViewListIcon,
  VolumeOffIcon as OutlineVolumeOffIcon,
  VolumeUpIcon as OutlineVolumeUpIcon,
  WifiIcon as OutlineWifiIcon,
  XCircleIcon as OutlineXCircleIcon,
  XIcon as OutlineXIcon,
  ZoomInIcon as OutlineZoomInIcon,
  ZoomOutIcon as OutlineZoomOutIcon,
} from "@heroicons/react/outline";
import { IconType } from "../../types/icons";
import { HexColor } from "@yext/studio-plugin";

const outlineIconMap: {
  [key in IconType]: React.ElementType;
} = {
  "Academic Cap": OutlineAcademicCapIcon,
  "Adjustments": OutlineAdjustmentsIcon,
  "Annotation": OutlineAnnotationIcon,
  "Archive": OutlineArchiveIcon,
  "Arrow Circle Down": OutlineArrowCircleDownIcon,
  "Arrow Circle Left": OutlineArrowCircleLeftIcon,
  "Arrow Circle Right": OutlineArrowCircleRightIcon,
  "Arrow Circle Up": OutlineArrowCircleUpIcon,
  "Arrow Down": OutlineArrowDownIcon,
  "Arrow Left": OutlineArrowLeftIcon,
  "Arrow Narrow Down": OutlineArrowNarrowDownIcon,
  "Arrow Narrow Left": OutlineArrowNarrowLeftIcon,
  "Arrow Narrow Right": OutlineArrowNarrowRightIcon,
  "Arrow Narrow Up": OutlineArrowNarrowUpIcon,
  "Arrow Right": OutlineArrowRightIcon,
  "Arrow Small Down": OutlineArrowSmDownIcon,
  "Arrow Small Left": OutlineArrowSmLeftIcon,
  "Arrow Small Right": OutlineArrowSmRightIcon,
  "Arrow Small Up": OutlineArrowSmUpIcon,
  "Arrow Up": OutlineArrowUpIcon,
  "Arrows Expand": OutlineArrowsExpandIcon,
  "At Symbol": OutlineAtSymbolIcon,
  "Backspace": OutlineBackspaceIcon,
  "Badge Check": OutlineBadgeCheckIcon,
  "Ban": OutlineBanIcon,
  "Beaker": OutlineBeakerIcon,
  "Bell": OutlineBellIcon,
  "Book Open": OutlineBookOpenIcon,
  "Bookmark Alt": OutlineBookmarkAltIcon,
  "Bookmark": OutlineBookmarkIcon,
  "Briefcase": OutlineBriefcaseIcon,
  "Cake": OutlineCakeIcon,
  "Calculator": OutlineCalculatorIcon,
  "Calendar": OutlineCalendarIcon,
  "Camera": OutlineCameraIcon,
  "Cash": OutlineCashIcon,
  "Chart Bar": OutlineChartBarIcon,
  "Chart Pie": OutlineChartPieIcon,
  "Chart Square Bar": OutlineChartSquareBarIcon,
  "Chat Alt 2": OutlineChatAlt2Icon,
  "Chat Alt": OutlineChatAltIcon,
  "Chat": OutlineChatIcon,
  "Check Circle": OutlineCheckCircleIcon,
  "Check": OutlineCheckIcon,
  "Chevron Double Down": OutlineChevronDoubleDownIcon,
  "Chevron Double Left": OutlineChevronDoubleLeftIcon,
  "Chevron Double Right": OutlineChevronDoubleRightIcon,
  "Chevron Double Up": OutlineChevronDoubleUpIcon,
  "Chevron Down": OutlineChevronDownIcon,
  "Chevron Left": OutlineChevronLeftIcon,
  "Chevron Right": OutlineChevronRightIcon,
  "Chevron Up": OutlineChevronUpIcon,
  "Chip": OutlineChipIcon,
  "Clipboard Check": OutlineClipboardCheckIcon,
  "Clipboard Copy": OutlineClipboardCopyIcon,
  "Clipboard List": OutlineClipboardListIcon,
  "Clipboard": OutlineClipboardIcon,
  "Clock": OutlineClockIcon,
  "Cloud Download": OutlineCloudDownloadIcon,
  "Cloud Upload": OutlineCloudUploadIcon,
  "Cloud": OutlineCloudIcon,
  "Code": OutlineCodeIcon,
  "Cog": OutlineCogIcon,
  "Collection": OutlineCollectionIcon,
  "Color Swatch": OutlineColorSwatchIcon,
  "Credit Card": OutlineCreditCardIcon,
  "Cube Transparent": OutlineCubeTransparentIcon,
  "Cube": OutlineCubeIcon,
  "Currency Bangladeshi": OutlineCurrencyBangladeshiIcon,
  "Currency Dollar": OutlineCurrencyDollarIcon,
  "Currency Euro": OutlineCurrencyEuroIcon,
  "Currency Pound": OutlineCurrencyPoundIcon,
  "Currency Rupee": OutlineCurrencyRupeeIcon,
  "Currency Yen": OutlineCurrencyYenIcon,
  "Cursor Click": OutlineCursorClickIcon,
  "Database": OutlineDatabaseIcon,
  "Desktop Computer": OutlineDesktopComputerIcon,
  "Device Mobile": OutlineDeviceMobileIcon,
  "Device Tablet": OutlineDeviceTabletIcon,
  "Document Add": OutlineDocumentAddIcon,
  "Document Download": OutlineDocumentDownloadIcon,
  "Document Duplicate": OutlineDocumentDuplicateIcon,
  "Document Remove": OutlineDocumentRemoveIcon,
  "Document Report": OutlineDocumentReportIcon,
  "Document Search": OutlineDocumentSearchIcon,
  "Document Text": OutlineDocumentTextIcon,
  "Document": OutlineDocumentIcon,
  "Dots Circle Horizontal": OutlineDotsCircleHorizontalIcon,
  "Dots Horizontal": OutlineDotsHorizontalIcon,
  "Dots Vertical": OutlineDotsVerticalIcon,
  "Download": OutlineDownloadIcon,
  "Duplicate": OutlineDuplicateIcon,
  "Emoji Happy": OutlineEmojiHappyIcon,
  "Emoji Sad": OutlineEmojiSadIcon,
  "Exclamation Circle": OutlineExclamationCircleIcon,
  "Exclamation": OutlineExclamationIcon,
  "External Link": OutlineExternalLinkIcon,
  "Eye Off": OutlineEyeOffIcon,
  "Eye": OutlineEyeIcon,
  "Fast Forward": OutlineFastForwardIcon,
  "Film": OutlineFilmIcon,
  "Filter": OutlineFilterIcon,
  "Finger Print": OutlineFingerPrintIcon,
  "Fire": OutlineFireIcon,
  "Flag": OutlineFlagIcon,
  "Folder Add": OutlineFolderAddIcon,
  "Folder Download": OutlineFolderDownloadIcon,
  "Folder Open": OutlineFolderOpenIcon,
  "Folder Remove": OutlineFolderRemoveIcon,
  "Folder": OutlineFolderIcon,
  "Gift": OutlineGiftIcon,
  "Globe Alt": OutlineGlobeAltIcon,
  "Globe": OutlineGlobeIcon,
  "Hand": OutlineHandIcon,
  "Hashtag": OutlineHashtagIcon,
  "Heart": OutlineHeartIcon,
  "Home": OutlineHomeIcon,
  "Identification": OutlineIdentificationIcon,
  "Inbox In": OutlineInboxInIcon,
  "Inbox": OutlineInboxIcon,
  "Information Circle": OutlineInformationCircleIcon,
  "Key": OutlineKeyIcon,
  "Library": OutlineLibraryIcon,
  "Light Bulb": OutlineLightBulbIcon,
  "Lightning Bolt": OutlineLightningBoltIcon,
  "Link": OutlineLinkIcon,
  "Location Marker": OutlineLocationMarkerIcon,
  "Lock Closed": OutlineLockClosedIcon,
  "Lock Open": OutlineLockOpenIcon,
  "Login": OutlineLoginIcon,
  "Logout": OutlineLogoutIcon,
  "Mail Open": OutlineMailOpenIcon,
  "Mail": OutlineMailIcon,
  "Map": OutlineMapIcon,
  "Menu Alt 1": OutlineMenuAlt1Icon,
  "Menu Alt 2": OutlineMenuAlt2Icon,
  "Menu Alt 3": OutlineMenuAlt3Icon,
  "Menu Alt 4": OutlineMenuAlt4Icon,
  "Menu": OutlineMenuIcon,
  "Microphone": OutlineMicrophoneIcon,
  "Minus Circle": OutlineMinusCircleIcon,
  "Minus Sm": OutlineMinusSmIcon,
  "Minus": OutlineMinusIcon,
  "Moon": OutlineMoonIcon,
  "Music Note": OutlineMusicNoteIcon,
  "Newspaper": OutlineNewspaperIcon,
  "Office Building": OutlineOfficeBuildingIcon,
  "Paper Airplane": OutlinePaperAirplaneIcon,
  "Paper Clip": OutlinePaperClipIcon,
  "Pause": OutlinePauseIcon,
  "Pencil Alt": OutlinePencilAltIcon,
  "Pencil": OutlinePencilIcon,
  "Phone Incoming": OutlinePhoneIncomingIcon,
  "Phone Missed Call": OutlinePhoneMissedCallIcon,
  "Phone Outgoing": OutlinePhoneOutgoingIcon,
  "Phone": OutlinePhoneIcon,
  "Photograph": OutlinePhotographIcon,
  "Play": OutlinePlayIcon,
  "Plus Circle": OutlinePlusCircleIcon,
  "Plus Sm": OutlinePlusSmIcon,
  "Plus": OutlinePlusIcon,
  "Presentation Chart Bar": OutlinePresentationChartBarIcon,
  "Presentation Chart Line": OutlinePresentationChartLineIcon,
  "Printer": OutlinePrinterIcon,
  "Puzzle": OutlinePuzzleIcon,
  "Qrcode": OutlineQrcodeIcon,
  "Question Mark Circle": OutlineQuestionMarkCircleIcon,
  "Receipt Refund": OutlineReceiptRefundIcon,
  "Receipt Tax": OutlineReceiptTaxIcon,
  "Refresh": OutlineRefreshIcon,
  "Reply": OutlineReplyIcon,
  "Rewind": OutlineRewindIcon,
  "Rss": OutlineRssIcon,
  "Save As": OutlineSaveAsIcon,
  "Save": OutlineSaveIcon,
  "Scale": OutlineScaleIcon,
  "Scissors": OutlineScissorsIcon,
  "Search Circle": OutlineSearchCircleIcon,
  "Search": OutlineSearchIcon,
  "Selector": OutlineSelectorIcon,
  "Server": OutlineServerIcon,
  "Share": OutlineShareIcon,
  "Shield Check": OutlineShieldCheckIcon,
  "Shield Exclamation": OutlineShieldExclamationIcon,
  "Shopping Bag": OutlineShoppingBagIcon,
  "Shopping Cart": OutlineShoppingCartIcon,
  "Sort Ascending": OutlineSortAscendingIcon,
  "Sort Descending": OutlineSortDescendingIcon,
  "Sparkles": OutlineSparklesIcon,
  "Speakerphone": OutlineSpeakerphoneIcon,
  "Star": OutlineStarIcon,
  "Status Offline": OutlineStatusOfflineIcon,
  "Status Online": OutlineStatusOnlineIcon,
  "Stop": OutlineStopIcon,
  "Sun": OutlineSunIcon,
  "Support": OutlineSupportIcon,
  "Switch Horizontal": OutlineSwitchHorizontalIcon,
  "Switch Vertical": OutlineSwitchVerticalIcon,
  "Table": OutlineTableIcon,
  "Tag": OutlineTagIcon,
  "Template": OutlineTemplateIcon,
  "Terminal": OutlineTerminalIcon,
  "Thumb Down": OutlineThumbDownIcon,
  "Thumb Up": OutlineThumbUpIcon,
  "Ticket": OutlineTicketIcon,
  "Translate": OutlineTranslateIcon,
  "Trash": OutlineTrashIcon,
  "Trending Down": OutlineTrendingDownIcon,
  "Trending Up": OutlineTrendingUpIcon,
  "Truck": OutlineTruckIcon,
  "Upload": OutlineUploadIcon,
  "User Add": OutlineUserAddIcon,
  "User Circle": OutlineUserCircleIcon,
  "User Group": OutlineUserGroupIcon,
  "User Remove": OutlineUserRemoveIcon,
  "User": OutlineUserIcon,
  "Users": OutlineUsersIcon,
  "Variable": OutlineVariableIcon,
  "Video Camera": OutlineVideoCameraIcon,
  "View Boards": OutlineViewBoardsIcon,
  "View Grid Add": OutlineViewGridAddIcon,
  "View Grid": OutlineViewGridIcon,
  "View List": OutlineViewListIcon,
  "Volume Off": OutlineVolumeOffIcon,
  "Volume Up": OutlineVolumeUpIcon,
  "Wifi": OutlineWifiIcon,
  "X Circle": OutlineXCircleIcon,
  "X": OutlineXIcon,
  "Zoom In": OutlineZoomInIcon,
  "Zoom Out": OutlineZoomOutIcon,
};

export default function OutlineIcon({
  name,
  classname,
  color,
}: {
  name?: IconType;
  classname?: string;
  color?: HexColor;
}) {
  const IconComponent = outlineIconMap[name ?? "Star"];
  return <IconComponent className={classname} style={{ fill: color }} />;
}