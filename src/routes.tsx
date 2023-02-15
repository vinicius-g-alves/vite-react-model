const Routes = ({ t }: { t: TFunction }): ReactElement<unknown> => {
  return (
    <Router>
      <Suspense fallback={<LoadingPage />}>
        <Switch>
          <Route
            exact
            path="/home"
            render={(props) => (
              <RenderComponent
                menuKey="home"
                useMainLayout
                tabTitle={t("tab.home")}
              >
                <Home {...props} />
              </RenderComponent>
            )}
          />

          <Route
            exact
            path="/graphs"
            render={(props) => (
              <RenderComponent
                menuKey="graphs"
                useMainLayout
                tabTitle={t("tab.graphs")}
              >
                <Graphs {...props} />
              </RenderComponent>
            )}
          />

          <Route
            exact
            path="/icons"
            render={(props) => (
              <RenderComponent
                menuKey="icons"
                useMainLayout
                tabTitle={t("tab.icons")}
              >
                <Icons {...props} />
              </RenderComponent>
            )}
          />

          <Route
            path={["/", "/auth"]}
            render={() => (
              <RenderComponent
                authRoute
                publicRoute
                absoluteTabTitle
                tabTitle={t("tab.authentication")}
              >
                <Auth />
              </RenderComponent>
            )}
          />
        </Switch>
      </Suspense>
    </Router>
  );
};

export default withTranslation()(Routes);
