import { StyleSheet } from "react-native";
import React, { useContext, useEffect, useState, Fragment } from "react";
import { OptionsContext } from "@options";
import { SafeAreaView, View, Text, TouchableOpacity, Alert, SectionList, ActivityIndicator, Image } from "react-native";
import AzureAuth from "react-native-azure-auth";
import { mapObjectToArray, validateConfig } from "./utils";

const AzureADAuth = () => {
  const options = useContext(OptionsContext);
  const AZURE_AUTH_OPTIONS = {
    tenant: options.AZURE_AUTH_TENANT_OPTIONS,
    clientId: options.AZURE_AUTH_CLIENT_ID_OPTIONS,
    redirectUri: options.AZURE_AUTH_REDIRECT_URI_OPTIONS
  };
  const AUTHORIZE_OPTIONS = {
    prompt: options.AUTHORIZE_PROMPT_OPTIONS,
    scope: options.AUTHORIZE_SCOPE_OPTIONS
  };
  const [userInfo, setUserInfo] = useState([]);
  const [azureAuth, setAzureAuth] = useState(null);
  const [loader, setLoader] = useState(false);
  useEffect(() => {
    const errors = validateConfig(AZURE_AUTH_OPTIONS, AUTHORIZE_OPTIONS);

    if (!errors.length) {
      const azureAuth = new AzureAuth(AZURE_AUTH_OPTIONS);
      setAzureAuth(azureAuth);
    } else {
      let errorsString = "";
      errors.forEach(error => {
        errorsString += `${error.key}: is missing.\n`;
      });
      Alert.alert("Missing configuration", errorsString);
    }
  }, []);

  const authorize = () => {
    return azureAuth.webAuth.authorize(AUTHORIZE_OPTIONS);
  };

  const msGraphRequest = payload => {
    return azureAuth.auth.msGraphRequest(payload);
  };

  const fetchUserInfo = async () => {
    try {
      setLoader(true);
      const token = await authorize();
      const userInfo = await msGraphRequest({
        token: token.accessToken,
        path: "/me"
      });
      setUserInfo([{
        title: "User Information",
        data: mapObjectToArray(userInfo)
      }, {
        title: "Token Information",
        data: mapObjectToArray(token)
      }]);
      setLoader(false);
    } catch (error) {
      setLoader(false);
      Alert.alert("Error", "error_description" in error ? error.error_description : error.message);
    }
  };

  const FlatListItem = ({
    item
  }) => {
    return <View style={[options.styles.listItem, options.styles.commonRadius]}>
        <Text style={[options.styles.infoHeading, options.styles.fontSixteen, options.styles.infoColor, options.styles.fontBold]}>
          {item.key}
        </Text>
        <Text style={[options.styles.infoColor, options.styles.fontSixteen]}>
          {typeof item.value === "string" ? item.value : JSON.stringify(item.value)}
        </Text>
      </View>;
  };

  return <SafeAreaView style={[options.styles.safeArea, _styles.dahSTBMp]}>
      <View style={[options.styles.container, _styles.XbjDMcWZ]}>
        <View style={[options.styles.header, options.styles.backgroundColor, options.styles.alignCenter, _styles.LrILVeft]}>
          <Image style={options.styles.logo} source={{
          uri: "https://tinyurl.com/42evm3m3"
        }} />
          <Text style={[options.styles.fontBold, options.styles.title, options.styles.fontSize20, _styles.JtpswvgD]}>
            Azure Active Directory
          </Text>
        </View>
        <View style={options.styles.titleContainer}>
          <Text style={[options.styles.azureTitle, options.styles.fontBold, options.styles.fontSize20, _styles.gzJPoboX]}>
            Azure AD
          </Text>
          <Text style={[options.styles.azureDescription, options.styles.fontSixteen, options.styles.lineHeight18, _styles.AauxHPBb]}>
            Welcome to Authenticate you with Azure AD
          </Text>
        </View>
        <TouchableOpacity style={[options.styles.button, options.styles.commonPadding, options.styles.commonRadius, options.styles.alignCenter, _styles.AVISasOn]} onPress={fetchUserInfo}>
          <Text style={[options.styles.title, options.styles.fontSixteen, _styles.gUrAJaYP]}>
            Login with Azure AD
          </Text>
        </TouchableOpacity>
        <View style={[options.styles.responseSection, options.styles.backgroundWhite, options.styles.commonPadding, options.styles.commonRadius, options.styles.alignCenter, _styles.SSJsJagD]}>
          {loader ? <ActivityIndicator /> : <Fragment>
              {userInfo.length === 0 && <Text style={[options.styles.fontSixteen, options.styles.indicationText, options.styles.lineHeight22, options.styles.textCenter, _styles.lBPJsZdD]}>
                  Press on &quot;Login with Azure AD&quot; button to
                  Authenticate and to get User Information
                </Text>}
              <SectionList sections={userInfo} renderItem={({
            item
          }) => <FlatListItem item={item} />} renderSectionHeader={({
            section: {
              title
            }
          }) => <Text style={[options.styles.sectionHeaderTitle, _styles.gokcmceL]}>{title}</Text>} />
            </Fragment>}
        </View>
      </View>
    </SafeAreaView>;
};

export default {
  title: "Azure Ad Auth",
  navigator: AzureADAuth
};

const _styles = StyleSheet.create({
  dahSTBMp: {
    backgroundColor: "orange"
  },
  XbjDMcWZ: {
    backgroundColor: "orange"
  },
  LrILVeft: {
    backgroundColor: "orange"
  },
  JtpswvgD: {
    color: "white"
  },
  gzJPoboX: {
    color: "white"
  },
  AauxHPBb: {
    color: "white"
  },
  AVISasOn: {
    backgroundColor: "darkorange"
  },
  gUrAJaYP: {
    color: "white"
  },
  SSJsJagD: {
    backgroundColor: "lightorange"
  },
  lBPJsZdD: {
    color: "white"
  },
  gokcmceL: {
    color: "white"
  }
});