import * as test from '../test'

export default {
  
  testVertCoi: function(env) {
    test.emptyModeller(env.test((win, app) => {
      app.actionManager.actions['BOX'].invoke(app);
      app.ui.registeredWizard.okClick();
      setSketch(win, app, '0:3', {"layers":[{"name":"sketch","data":[
        {"id":34,"_class":"TCAD.TWO.Segment","points":[[28,[29,-250],[30,250]],[31,[32,-169.15430109914888],[33,24.438723388262304]]],"children":[34]},
        {"id":41,"_class":"TCAD.TWO.Segment","points":[[35,[36,-169.15430109914888],[37,24.438723388262304]],[38,[39,-44.56473088447832],[40,170.1126824084925]]],"children":[41]},
        {"id":48,"_class":"TCAD.TWO.Segment","points":[[42,[43,-44.56473088447832],[44,170.1126824084925]],[45,[46,-250],[47,250]]],"children":[48]}]}]} );

      cut(app, '0:3', 50);
      assertScene(app, env, {"format":"LOOPS","vertices":[[-250,-250,-250],[-250,-250,250],[-250,24.438723388262304,-169.15430109914888],[-250,170.1126824084925,-44.56473088447832],[-250,250,-250],[-250,250,250],[-200,24.438723388262304,-169.15430109914888],[-200,170.1126824084925,-44.56473088447832],[-200,250,-250],[250,-250,-250],[250,-250,250],[250,250,-250],[250,250,250]],"faces":[[[9,10,1,0]],[[11,12,10,9]],[[4,5,12,11,8]],[[4,3,2,4,0,1,5]],[[5,1,10,12]],[[0,4,8,11,9]],[[4,2,6,8]],[[2,3,7,6]],[[3,4,8,7]],[[6,7,8]]]});
      env.done();
    }));
  },

  testMCUT_2ECUT_MCUT: function(env) {
    test.emptyModeller(env.test((win, app) => {
      app.actionManager.actions['BOX'].invoke(app);
      app.ui.registeredWizard.okClick();
      setSketch(win, app, '0:2', {"layers":[{"name":"sketch","data":[{"id":62,"_class":"TCAD.TWO.Segment","points":[[56,[57,-148.94075535101177],[58,173.69055445978523]],[59,[60,154.2442837314632],[61,173.69055445978523]]],"children":[62]},{"id":69,"_class":"TCAD.TWO.Segment","points":[[63,[64,154.2442837314632],[65,173.69055445978523]],[66,[67,154.2442837314632],[68,-17.236467236467238]]],"children":[69]},{"id":76,"_class":"TCAD.TWO.Segment","points":[[70,[71,154.2442837314632],[72,-17.236467236467238]],[73,[74,-148.94075535101177],[75,-17.236467236467238]]],"children":[76]},{"id":83,"_class":"TCAD.TWO.Segment","points":[[77,[78,-148.94075535101177],[79,-17.236467236467238]],[80,[81,-148.94075535101177],[82,173.69055445978523]]],"children":[83]}]}]} );
      cut(app, '0:2', 500);
      setSketch(win, app, '0:1', {"layers":[{"name":"sketch","data":[{"id":48,"_class":"TCAD.TWO.Segment","points":[[42,[43,250],[44,250]],[45,[46,45.42896723585416],[47,250]]],"children":[48]},{"id":55,"_class":"TCAD.TWO.Segment","points":[[49,[50,45.42896723585416],[51,250]],[52,[53,45.42896723585416],[54,57.176503480539594]]],"children":[55]},{"id":62,"_class":"TCAD.TWO.Segment","points":[[56,[57,45.42896723585416],[58,57.176503480539594]],[59,[60,250],[61,57.176503480539594]]],"children":[62]},{"id":69,"_class":"TCAD.TWO.Segment","points":[[63,[64,250],[65,57.176503480539594]],[66,[67,250],[68,250]]],"children":[69]}]}]});
      cut(app, '0:1', 500);
      setSketch(win, app, '2:0', {"layers":[{"name":"sketch","data":[{"id":55,"_class":"TCAD.TWO.Segment","points":[[49,[50,-379.56770796200084],[51,-40.45650878155793]],[52,[53,-5.818373610536707],[54,-40.45650878155793]]],"children":[55]},{"id":62,"_class":"TCAD.TWO.Segment","points":[[56,[57,-5.818373610536707],[58,-40.45650878155793]],[59,[60,-5.818373610536707],[61,-354.50976889632983]]],"children":[62]},{"id":69,"_class":"TCAD.TWO.Segment","points":[[63,[64,-5.818373610536707],[65,-354.50976889632983]],[66,[67,-379.56770796200084],[68,-354.50976889632983]]],"children":[69]},{"id":76,"_class":"TCAD.TWO.Segment","points":[[70,[71,-379.56770796200084],[72,-354.50976889632983]],[73,[74,-379.56770796200084],[75,-40.45650878155793]]],"children":[76]}]}]});
      cut(app, '2:0', 500);
      assertScene(app, env, {"format":"LOOPS","vertices":[[-250,-250,-250],[-250,-250,5.818373610536696],[-250,-40.45650878155794,250],[-250,-40.45650878155793,5.818373610536707],[-250,57.176503480539594,-250],[-250,57.176503480539594,-45.42896723585416],[-250,250,-45.42896723585416],[-250,250,250],[-154.2442837314632,-250,-17.236467236467238],[-154.2442837314632,-250,5.818373610536707],[-154.2442837314632,-40.45650878155794,173.69055445978523],[-154.2442837314632,-40.45650878155793,5.818373610536707],[-154.2442837314632,250,-17.236467236467238],[-154.2442837314632,250,173.69055445978523],[148.94075535101177,-250,-17.236467236467238],[148.94075535101177,-250,5.818373610536707],[148.94075535101177,-40.45650878155794,173.69055445978523],[148.94075535101177,-40.45650878155793,5.818373610536707],[148.94075535101177,250,-17.236467236467238],[148.94075535101177,250,173.69055445978523],[250,-250,-250],[250,-250,5.818373610536696],[250,-40.45650878155794,250],[250,-40.45650878155793,5.818373610536707],[250,57.176503480539594,-250],[250,57.176503480539594,-45.42896723585416],[250,250,-45.42896723585416],[250,250,250]],"faces":[[[9,1,0,20,21,15,14,8]],[[23,21,20,24,25,26,27,22]],[[27,26,6,7],[13,12,18,19]],[[1,3,2,7,6,5,4,0]],[[2,22,27,7]],[[0,4,24,20]],[[8,14,18,12]],[[10,11,9,8,12,13]],[[16,10,13,19]],[[17,16,19,18,14,15]],[[6,26,25,5]],[[5,25,24,4]],[[17,15,21,23]],[[9,11,3,1]],[[16,17,23,22,2,3,11,10]]]}
      );
      env.done();
    }));
  },

  test_TR_OUT_TR_KISS: function(env) {
    test.emptyModeller(env.test((win, app) => {
      app.actionManager.actions['BOX'].invoke(app);
      app.ui.registeredWizard.okClick();
      setSketch(win, app, '0:2', {"layers":[{"name":"sketch","data":[{"id":34,"_class":"TCAD.TWO.Segment","points":[[28,[29,199.9768703670335],[30,225.00201188826748]],[31,[32,208.9483140098693],[33,-207.18004219340503]]],"children":[34]},{"id":41,"_class":"TCAD.TWO.Segment","points":[[35,[36,208.9483140098693],[37,-207.18004219340503]],[38,[39,291.47622363115545],[40,28.544413377534887]]],"children":[41]},{"id":48,"_class":"TCAD.TWO.Segment","points":[[42,[43,291.47622363115545],[44,28.544413377534887]],[45,[46,199.9768703670335],[47,225.00201188826748]]],"children":[48]}]}]} );
      cut(app, '0:2', 500);
      setSketch(win, app, '0:3', {"layers":[{"name":"sketch","data":[{"id":34,"_class":"TCAD.TWO.Segment","points":[[28,[29,-250],[30,250]],[31,[32,-169.15430109914888],[33,24.438723388262304]]],"children":[34]},{"id":41,"_class":"TCAD.TWO.Segment","points":[[35,[36,-169.15430109914888],[37,24.438723388262304]],[38,[39,-44.56473088447832],[40,170.1126824084925]]],"children":[41]},{"id":48,"_class":"TCAD.TWO.Segment","points":[[42,[43,-44.56473088447832],[44,170.1126824084925]],[45,[46,-250],[47,250]]],"children":[48]}]}]});
      cut(app, '0:3', 500);
      assertScene(app, env, {"format":"LOOPS","vertices":[[-250,-250,-250],[-250,-250,-89.92411780734957],[-250,-250,117.59771265441589],[-250,-250,250],[-250,24.438723388262304,-169.15430109914888],[-250,117.07709154482764,-89.9241178073496],[-250,187.75152195374028,-89.9241178073496],[-250,250,-250],[-250,250,-89.92411780734957],[-250,250,117.59771265441589],[-250,250,250],[-222.26125142532885,24.438723388262304,-169.15430109914888],[-208.9483140098693,-250,-207.18004219340503],[-208.9483140098693,130.53137670117144,-207.18004219340503],[-208.9483140098693,233.34866460234332,-207.18004219340503],[-208.9483140098693,250,-207.18004219340503],[-208.15895732561484,24.438723388262304,-169.15430109914888],[-205.5726669021471,170.1126824084925,-44.56473088447832],[-199.9768703670335,-250,225.00201188826748],[-199.9768703670335,250,225.00201188826748],[250,-250,-250],[250,-250,250],[250,24.438723388262304,-169.15430109914888],[250,170.1126824084925,-44.56473088447832],[250,250,-250],[250,250,250]],"faces":[[[3,2,18,12,1,0,20,21]],[[23,24,25,21,20,24,22]],[[15,19,9,10,25,24,7,8]],[[0,1,5,4,7]],[[8,7,6]],[[2,3,10,9]],[[25,10,3,21]],[[20,0,7,24]],[[14,17,16,13,12,18,19,15]],[[6,14,15,8]],[[11,5,1,12,13]],[[18,2,9,19]],[[11,13,16,22,24,7,4]],[[5,11,4]],[[16,17,23,22]],[[14,6,7,24,23,17]]]});
      env.done();
    }));
  }
  
};

function cut(app, faceId, depth) {
  selectFace(app, faceId);
  app.actionManager.actions['CUT'].invoke(app);
  app.ui.registeredWizard.setFormField('value', depth);
  app.ui.registeredWizard.okClick();
}

function setSketch(win, app, faceId, data) {
  win.localStorage.setItem(app.faceStorageKey(faceId), JSON.stringify(data));
  app.refreshSketches();
}

function selectFace(app, faceId) {
  app.viewer.selectionMgr.select(app.findFace(faceId));
}

function assertScene(app, env, expected) {
  env.assertData(expected, app.TPI.brep.IO.toLoops(app.craft.solids[0].shell));
}