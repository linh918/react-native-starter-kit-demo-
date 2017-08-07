/* @flow */

import React from "react";

import { Platform } from "react-native";
import { Root } from "native-base";
import { StackNavigator } from "react-navigation";

import Drawer from "../../fw/Drawer";
import Header from "../../fw/components/Header/";
import Header1 from "../../fw/components/Header/1";
import Header2 from "../../fw/components/Header/2";
import Header3 from "../../fw/components/Header/3";
import Header4 from "../../fw/components/Header/4";
import Header5 from "../../fw/components/Header/5";
import Header6 from "../../fw/components/Header/6";
import Header7 from "../../fw/components/Header/7";
import Header8 from "../../fw/components/Header/8";
import BasicFooter from "../../fw/components/footer/basicFooter";
import IconFooter from "../../fw/components/footer/iconFooter";
import IconText from "../../fw/components/footer/iconText";
import BadgeFooter from "../../fw/components/footer/badgeFooter";
import Default from "../../fw/components/button/default";
import Outline from "../../fw/components/button/outline";
import Rounded from "../../fw/components/button/rounded";
import Block from "../../fw/components/button/block";
import Full from "../../fw/components/button/full";
import Custom from "../../fw/components/button/custom";
import Transparent from "../../fw/components/button/transparent";
import IconBtn from "../../fw/components/button/iconBtn";
import Disabled from "../../fw/components/button/disabled";
import BasicCard from "../../fw/components/card/basic";
import NHCardImage from "../../fw/components/card/card-image";
import NHCardShowcase from "../../fw/components/card/card-showcase";
import NHCardList from "../../fw/components/card/card-list";
import NHCardHeaderAndFooter from "../../fw/components/card/card-header-and-footer";
import BasicFab from "../../fw/components/fab/basic";
import MultipleFab from "../../fw/components/fab/multiple";
import FixedLabel from "../../fw/components/form/fixedLabel";
import InlineLabel from "../../fw/components/form/inlineLabel";
import FloatingLabel from "../../fw/components/form/floatingLabel";
import PlaceholderLabel from "../../fw/components/form/placeholder";
import StackedLabel from "../../fw/components/form/stacked";
import RegularInput from "../../fw/components/inputgroup/regular";
import UnderlineInput from "../../fw/components/inputgroup/underline";
import RoundedInput from "../../fw/components/inputgroup/rounded";
import IconInput from "../../fw/components/inputgroup/iconInput";
import SuccessInput from "../../fw/components/inputgroup/success";
import ErrorInput from "../../fw/components/inputgroup/error";
import DisabledInput from "../../fw/components/inputgroup/disabledInput";
import RowNB from "../../fw/components/layout/row";
import ColumnNB from "../../fw/components/layout/column";
import NestedGrid from "../../fw/components/layout/nested";
import CustomRow from "../../fw/components/layout/customRow";
import CustomCol from "../../fw/components/layout/customCol";
import BasicListSwipe from "../../fw/components/listSwipe/basic-list-swipe";
import MultiListSwipe from "../../fw/components/listSwipe/multi-list-swipe";
import NHBasicList from "../../fw/components/list/basic-list";
import NHListDivider from "../../fw/components/list/list-divider";
import NHListSeparator from "../../fw/components/list/list-separator";
import NHListHeader from "../../fw/components/list/list-headers";
import NHListIcon from "../../fw/components/list/list-icon";
import NHListAvatar from "../../fw/components/list/list-avatar";
import NHListThumbnail from "../../fw/components/list/list-thumbnail";
import RegularPicker from "../../fw/components/picker/regularPicker";
import PlaceholderPicker from "../../fw/components/picker/placeholderPicker";
import PlaceholderPickerNote from "../../fw/components/picker/placeholderPickernote";
import BackButtonPicker from "../../fw/components/picker/backButtonPicker";
import HeaderPicker from "../../fw/components/picker/headerPicker";
import HeaderStylePicker from "../../fw/components/picker/headerStylePicker";
import CustomHeaderPicker from "../../fw/components/picker/customHeaderPicker";
import BasicTab from "../../fw/components/tab/basicTab";
import ConfigTab from "../../fw/components/tab/configTab";
import ScrollableTab from "../../fw/components/tab/scrollableTab";
import BasicSegment from "../../fw/components/segment/SegmentHeader";
import RegularActionSheet from "../../fw/components/actionsheet/regular";
import IconActionSheet from "../../fw/components/actionsheet/icon";
import AdvSegment from "../../fw/components/segment/segmentTab";
import SimpleDeck from "../../fw/components/deckswiper/simple";
import AdvancedDeck from "../../fw/components/deckswiper/advanced";
import CGV from '../containers/main'
import PlatformDemo from '../containers/platformDemo'
export default (Navigator = new StackNavigator(
  {
   
    Drawer: { screen: Drawer },
    CGV:{screen:CGV},
     PlatformDemo:{screen:PlatformDemo},
    Header1: { screen: Header1 },
    Header2: { screen: Header2 },
    Header3: { screen: Header3 },
    Header4: { screen: Header4 },
    Header5: { screen: Header5 },
    Header6: { screen: Header6 },
    Header7: { screen: Header7 },
    Header8: { screen: Header8 },

    BasicFooter: { screen: BasicFooter },
    IconFooter: { screen: IconFooter },
    IconText: { screen: IconText },
    BadgeFooter: { screen: BadgeFooter },

    Default: { screen: Default },
    Outline: { screen: Outline },
    Rounded: { screen: Rounded },
    Block: { screen: Block },
    Full: { screen: Full },
    Custom: { screen: Custom },
    Transparent: { screen: Transparent },
    IconBtn: { screen: IconBtn },
    Disabled: { screen: Disabled },

    BasicCard: { screen: BasicCard },
    NHCardImage: { screen: NHCardImage },
    NHCardShowcase: { screen: NHCardShowcase },
    NHCardList: { screen: NHCardList },
    NHCardHeaderAndFooter: { screen: NHCardHeaderAndFooter },

    SimpleDeck: { screen: SimpleDeck },
    AdvancedDeck: { screen: AdvancedDeck },

    BasicFab: { screen: BasicFab },
    MultipleFab: { screen: MultipleFab },

    FixedLabel: { screen: FixedLabel },
    InlineLabel: { screen: InlineLabel },
    FloatingLabel: { screen: FloatingLabel },
    PlaceholderLabel: { screen: PlaceholderLabel },
    StackedLabel: { screen: StackedLabel },
    RegularInput: { screen: RegularInput },
    UnderlineInput: { screen: UnderlineInput },
    RoundedInput: { screen: RoundedInput },
    IconInput: { screen: IconInput },
    SuccessInput: { screen: SuccessInput },
    ErrorInput: { screen: ErrorInput },
    DisabledInput: { screen: DisabledInput },

    RowNB: { screen: RowNB },
    ColumnNB: { screen: ColumnNB },
    NestedGrid: { screen: NestedGrid },
    CustomRow: { screen: CustomRow },
    CustomCol: { screen: CustomCol },

    NHBasicList: { screen: NHBasicList },
    NHListDivider: { screen: NHListDivider },
    NHListSeparator: { screen: NHListSeparator },
    NHListHeader: { screen: NHListHeader },
    NHListIcon: { screen: NHListIcon },
    NHListAvatar: { screen: NHListAvatar },
    NHListThumbnail: { screen: NHListThumbnail },

    BasicListSwipe: { screen: BasicListSwipe },
    MultiListSwipe: { screen: MultiListSwipe },

    RegularPicker: { screen: RegularPicker },
    PlaceholderPicker: { screen: PlaceholderPicker },
    PlaceholderPickerNote: { screen: PlaceholderPickerNote },
    BackButtonPicker: { screen: BackButtonPicker },
    HeaderPicker: { screen: HeaderPicker },
    HeaderStylePicker: { screen: HeaderStylePicker },
    CustomHeaderPicker: { screen: CustomHeaderPicker },

    BasicTab: { screen: BasicTab },
    ConfigTab: { screen: ConfigTab },
    ScrollableTab: { screen: ScrollableTab },

    BasicSegment: { screen: BasicSegment },
    AdvSegment: { screen: AdvSegment },

    RegularActionSheet: { screen: RegularActionSheet },
    IconActionSheet: { screen: IconActionSheet }
  },
  {
    initialRouteName: "Drawer",
    headerMode: "none"
  }
));
