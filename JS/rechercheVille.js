/* ===========================================================
   Titre : Recherche et navigation — Villes (A→Z, champ unique) — version robuste
   =========================================================== */
(() => {
  'use strict';

  /* --------- 0) TA LISTE PAR LETTRE (A et B incluses) --------- */
  const VILLES_BY_LETTER = {
    A: [
      { name: 'Abbeville', url: '../../Villes_A/Abbeville/abbeville.html' },
      { name: 'Abries', url: '../../Villes_A/Abries/abries.html' },
      { name: 'Agde', url: '../../Villes_A/Agde/agde.html' },
      { name: 'Agen', url: '../../Villes_A/Agen/agen.html' },
      { name: 'Ahun', url: '../../Villes_A/Ahun/ahun.html' },
      { name: 'L-Aigle', url: '../../Villes_A/L-Aigle/lAigle.html' },
      { name: 'Aignay-Le-Duc', url: '../../Villes_A/Aignay-Le-Duc/aignayLeDuc.html' },
      { name: 'Aigre', url: '../../Villes_A/AIGRE/aigre.html' },
      { name: 'Aigueperse', url: '../../Villes_A/Aigueperse/aigueperse.html' },
      { name: 'Aigues-Mortes', url: '../../Villes_A/Aigues-Mortes/aiguesMorte.html' },
      { name: 'Aiguillon', url: '../../Villes_A/Aiguillon/aiguiollon.html' },
      { name: 'Aire en Artois', url: '../../Villes_A/AireEnArtois/aireEnArtoi.html' },
      { name: 'AireEnGascogne', url: '../../Villes_A/AireEnGascogne/aireEnGascogne.html' },
      { name: 'Airvault', url: '../../Villes_A/Airvaut/airvault.html' },
      { name: 'Aix', url: '../../Villes_A/Aix/aix.html' },
      { name: 'Les-Aix-D-angillon', url: '../../Villes_A/Les-Aix-D-angillon/lesAixDangillon.html' },
      { name: 'Ajaccio', url: '../../Villes_A/Ajaccio/ajaccio.html/' },
      { name: 'Alais', url: '../../Villes_A/Alais/alais.html' },
      { name: 'Albert', url: '../../Villes_A/Albert/albert.html' },
      { name: 'Albi', url: '../../Villes_A/Albi/albi.html' },
      { name: 'Alencon', url: '../../Villes_A/Alencon/alencon.html' },
      { name: 'Alet', url: '../../Villes_A/Alet/alet.html' },
      { name: 'Altkirch', url: '../../Villes_A/Altkirch/altkirck.html' },
      { name: 'Alzonne', url: '../../Villes_A/Alzonne/alzonne.html' },
      { name: 'Amberieu-En-Bugey', url: '../../Villes_A/Amberieu-En-Bugey/amberieuEnBugey.html' },
      { name: 'Ambert', url: '../../Villes_A/Ambert/ambert.html' },
      { name: 'Amboise', url: '../../Villes_A/Amboise/amboise.html' },
      { name: 'Amiens', url: '../../Villes_A/Amiens/amiens.html' },
      { name: 'Ancenis', url: '../../Villes_A/Ancenis/ancenis.html' },
      { name: 'Ancy-Le-Franc', url: '../../Villes_A/Ancy-Le-Franc/ancyLeFranc.html' },
      { name: 'Les_Andelys', url: '../../Villes_A/Les_Andelys/lesAndelys.html' },
      { name: 'Andresy', url: '../../Villes_A/Andresy/andresy.html' },
      { name: 'Anduse', url: '../../Villes_A/Anduse/anduse.html' },
      { name: 'Angers', url: '../../Villes_A/Angers/angers.html' },
      { name: 'Angerville', url: '../../Villes_A/Angerville/angerville.html' },
      { name: 'Angles', url: '../../Villes_A/Angles/angles.html' },
      { name: 'Angouleme', url: '../../Villes_A/Angouleme/angoulemes.html' },
      { name: 'Annonay', url: '../../Villes_A/Annonay/annonay.html' },
      { name: 'Anse', url: '../../Villes_A/Anse/anse.html' },
      { name: 'Antibes', url: '../../Villes_A/Antibes/antibes.html' },
      { name: 'Antony', url: '../../Villes_A/Antony/antony.html' },
      { name: 'Antrain', url: '../../Villes_A/Antrain/antrain.html' },
      { name: 'Apt', url: '../../Villes_A/Apt/apt.html' },
      { name: 'Arbois', url: '../../Villes_A/Arbois/arbois.html' },
      { name: 'L-Arbresle', url: '../../Villes_A/L-Arbresle/larbresle.html' },
      { name: 'Arcis-Sur-Aube', url: '../../Villes_A/Arcis-Sur-Aube/arcisSurAube.html' },
      { name: 'Ardes', url: '../../Villes_A/Ardes/ardes.html' },
      { name: 'Ardres', url: '../../Villes_A/Ardres/ardres.html' },
      { name: 'Argeles', url: '../../Villes_A/Argeles/argeles.html' },
      { name: 'Argent', url: '../../Villes_A/Argent/argent.html' },
      { name: 'Argentan', url: '../../Villes_A/Argentan/argentan.html' },
      { name: 'Argentat', url: '../../Villes_A/Argentat/argentat.html' },
      { name: 'Argenteuil', url: '../../Villes_A/Argenteuil/argenteuil.html' },
      { name: 'Argenton', url: '../../Villes_A/Argenton/argenton.html' },
      { name: 'Argenton-Le-Chateau', url: '../../Villes_A/Argenton-Le-Chateau/argentonLeChateau.html' },
      { name: 'Arles', url: '../../Villes_A/Arles/arles.html' },
      { name: 'Arles-En-Roussillon', url: '../../Villes_A/Arles-En-Roussillon/arlesEnRoussillon.html' },
      { name: 'Armentieres', url: '../../Villes_A/Armentieres/armentieres.html' },
      { name: 'Arnac', url: '../../Villes_A/Arnac/arnac.html' },
      { name: 'Arnay-Le-Duc', url: '../../Villes_A/Arnay-Le-Duc/arnayLeDuc.html' },
      { name: 'Arnouville', url: '../../Villes_A/Arnouville/arnouville.html' },
      { name: 'Arpajon', url: '../../Villes_A/Arpajon/arpajon.html' },
      { name: 'Arras', url: '../../Villes_A/Arras/arras.html' },
      { name: 'Arreau', url: '../../Villes_A/Arreau/arreau.html' },
      { name: 'Ars-En-Re', url: '../../Villes_A/Ars-En-Re/arsEnRe.html' },
      { name: 'Arsac', url: '../../Villes_A/Arsac/arsac.html' },
      { name: 'Artenay', url: '../../Villes_A/Artenay/artenay.html' },
      { name: 'Astaffort', url: '../../Villes_A/Astaffort/astaffort.html' },
      { name: 'Ath', url: '../../Villes_A/Ath/ath.html' },
      { name: 'Attigny', url: '../../Villes_A/Attigny/attigny.html/' },
      { name: 'Aubagne', url: '../../Villes_A/Aubagne/aubagne.html' },
      { name: 'Aubenas', url: '../../Villes_A/Aubenas/aubenas.html' },
      { name: 'Aubenton', url: '../../Villes_A/Aubenton/aubenton.html' },
      { name: 'Aubigny', url: '../../Villes_A/Aubigny/aubigny.html' },
      { name: 'Aubusson', url: '../../Villes_A/Aubusson/aubusson.html' },
      { name: 'Auch', url: '../../Villes_A/Auch/auch.html/' },
      { name: 'Audenarde', url: '../../Villes_A/Audenarde/audenarde.html' },
      { name: 'Aulnay', url: '../../Villes_A/Aulnay/aulnay.html' },
      { name: 'Aumale', url: '../../Villes_A/Aumale/aumale.html' },
      { name: 'Aups', url: '../../Villes_A/Aups/aups.html' },
      { name: 'Auray', url: '../../Villes_A/Auray/auray.html' },
      { name: 'Aurillac', url: '../../Villes_A/Aurillac/aurillac.html' },
      { name: 'Auterive', url: '../../Villes_A/Auterive/auterive.html' },
      { name: 'Autun', url: '../../Villes_A/Autun/autun.html' },
      { name: 'Auxerre', url: '../../Villes_A/Auxerre/auxerre.html' },
      { name: 'Auxonne', url: '../../Villes_A/Auxonne/auxonne.html' },
      { name: 'Auxy-Le-Chateau', url: '../../Villes_A/Auxy-Le-Chateau/auxyLeChateau.html' },
      { name: 'Auzance', url: '../../Villes_A/Auzance/auzance.html' },
      { name: 'Avallon', url: '../../Villes_A/Avallon/avallon.html' },
      { name: 'Avesnes', url: '../../Villes_A/Avesnes/avesnes.html' },
      { name: 'Avenay', url: '../../Villes_A/Avenay/avenay.html' },
      { name: 'Avignon', url: '../../Villes_A/Avignon/avignon.html' },
      { name: 'Avranches', url: '../../Villes_A/Avranches/avranches.html' },
      { name: 'Ay', url: '../../Villes_A/Ay/Ay.html' },
      { name: 'Azille', url: '../../Villes_A/Azille/azille.html' },
      { name: 'Sommaire Ville A', url: '../../Villes_A/sommaireVilleA.html' },
    ],
    B: 
    [
        { name: 'Baccarat', url: '../../Villes_B/Baccarat/baccarat.html' },
        { name: 'Bagneres-De-Bigorre', url: '../../Villes_B/Bagneres-De-Bigorre/bagneresDeBigorre.html' },
        { name: 'Bagneres-De-Luchon', url: '../../Villes_B/Bagneres-De-Luchon/bagneresDeLuchon.html' },
        { name: 'Bagnols', url: '../../Villes_B/Bagnols/bagnols.html' },
        { name: 'Bailleul', url: '../../Villes_B/Bailleul/bailleul.html' },
        { name: 'Bain', url: '../../Villes_B/Bain/bain.html' },
        { name: 'Bains', url: '../../Villes_B/Bains/bains.html' },
        { name: 'Baisieux', url: '../../Villes_B/Baisieux/baisieux.html' },
        { name: 'Balleroy', url: '../../Villes_B/Balleroy/balleroy.html' },
        { name: 'Bapaume', url: '../../Villes_B/Bapaume/bapaume.html' },
        { name: 'Bar-Le-Duc', url: '../../Villes_B/Bar-Le-Duc/barLeDuc.html' },
        { name: 'Bar-Sur-Aube', url: '../../Villes_B/Bar-Sur-Aube/barSurAube.html' },
        { name: 'Bar-Sur-Seine', url: '../../Villes_B/Bar-Sur-Seine/barSurSeine.html' },
        { name: 'La-Baraque-Sous-Gevrey', url: '../../Villes_B/La-Baraque-Sous-Gevrey/LabaraqueSousGevrey.html' },
        { name: 'Barbencon', url: '../../Villes_B/Barbencon/barbencon.html' },
        { name: 'Barbentane', url: '../../Villes_B/Barbentane/barbentane.html' },
        { name: 'Barbezieux', url: '../../Villes_B/Barbezieux/barbezieux.html' },
        { name: 'Barbonne', url: '../../Villes_B/Barbonne/barbonne.html' },
        { name: 'Barcelonette', url: '../../Villes_B/Barcelonette/barcelonette.html' },
        { name: 'Bareges', url: '../../Villes_B/Bareges/bareges.html' },
        { name: 'Barentin', url: '../../Villes_B/Barentin/barentin.html' },
        { name: 'Barjac', url: '../../Villes_B/Barjac/barjac.html' },
        { name: 'Barjols', url: '../../Villes_B/Barjols/barjols.html' },
        { name: 'Barraux', url: '../../Villes_B/Barraux/barraux.html' },
        { name: 'La-Barre', url: '../../Villes_B/La-Barre/laBarre.html' },
        { name: 'La-Bassee', url: '../../Villes_B/La-Bassee/laBassee.html' },
        { name: 'Bassou', url: '../../Villes_B/Bassou/bassou.html' },
        { name: 'Bastia', url: '../../Villes_B/Bastia/bastia.html' },
        { name: 'Bauge', url: '../../Villes_B/Bauge/bauge.html' },
        { name: 'Baume-Les-Dames', url: '../../Villes_B/Baume-Les-Dames/baumeLesDames.html' },
        { name: 'Bavay', url: '../../Villes_B/Bavay/bavay.html' },
        { name: 'Bayeux', url: '../../Villes_B/Bayeux/bayeux.html' },
        { name: 'Bayonne', url: '../../Villes_B/Bayonne/bayonne.html' },
        { name: 'Bazas', url: '../../Villes_B/Bazas/bazas.html' },
        { name: 'Beaucaire', url: '../../Villes_B/Beaucaire/beaucaire.html' },
        { name: 'Beaufort', url: '../../Villes_B/Beaufort/beaufort.html' },
        { name: 'Beaugency', url: '../../Villes_B/Beaugency/beaugency.html' },
        { name: 'Beaujeu', url: '../../Villes_B/Beaujeu/beaujeu.html' },
        { name: 'Beaulieu36', url: '../../Villes_B/Beaulieu36/beaulieu36.html' },
        { name: 'Beaulieu18', url: '../../Villes_B/Beaulieu18/beaulieu18.html' },
        { name: 'Beaulieu79', url: '../../Villes_B/Beaulieu79/beaulieu79.html' },
        { name: 'Beaumont-De-Lomagne', url: '../../Villes_B/Beaumont-De-Lomagne/beaumontDeLomagne.html' },
        { name: 'Beaumont-Le-Roger', url: '../../Villes_B/Beaumont-Le-Roger/beaumontLeRoger.html' },
        { name: 'Beaumont-Le-Vicomte', url: '../../Villes_B/Beaumont-Le-Vicomte/beaumontLeVicomte.html' },
        { name: 'Beaumont-Sur-Oise', url: '../../Villes_B/Beaumont-Sur-Oise/beaumontSurOise.html' },
        { name: 'Beaune', url: '../../Villes_B/Beaune/baune.html' },
        { name: 'Beaupreau', url: '../../Villes_B/Beaupreau/beaupreau.html' },
        { name: 'Beaurepaire', url: '../../Villes_B/Beaurepaire/beaurepaire.html' },
        { name: 'Le-Beausset', url: '../../Villes_B/Le-Beausset/LeBeausset.html' },
        { name: 'Beauvais', url: '../../Villes_B/Beauvais/beauvais.html' },
        { name: 'Beauvoir-Sur-Mer', url: '../../Villes_B/Beauvoir-Sur-Mer/beauvoirSurMer.html' },
        { name: 'Becherel', url: '../../Villes_B/Becherel/becherel.html' },
        { name: 'Bedarieux', url: '../../Villes_B/Bedarieux/bedarieux.html' },
        { name: 'Belfort', url: '../../Villes_B/Belfort/belfort.html' },
        { name: 'Bellac', url: '../../Villes_B/Bellac/bellac.html' },
        { name: 'Belle-Isle-En-Mer', url: '../../Villes_B/Belle-Isle-En-Mer/belleIsleEnMer.html' },
        { name: 'Belle-Isle-En-Terre', url: '../../Villes_B/Belle-Isle-En-Terre/belleIsleEnTerre.html' },
        { name: 'Bellegarde', url: '../../Villes_B/Bellegarde/bellegarde.html' },
        { name: 'Bellemare', url: '../../Villes_B/Bellemare/bellemare.html' },
        { name: 'Belleme', url: '../../Villes_B/Belleme/belleme.html' },
        { name: 'Belleville-Sur-Saone', url: '../../Villes_B/Belleville-Sur-Saone/bellevilleSurSaone.html' },
        { name: 'Belley', url: '../../Villes_B/Belley/belley.html' },
        { name: 'Belpech', url: '../../Villes_B/Belpech/belpech.html' },
        { name: 'Belves', url: '../../Villes_B/Belves/belves.html' },
        { name: 'Benfeld', url: '../../Villes_B/Benfeld/benfeld.html' },
        { name: 'Bergerac', url: '../../Villes_B/Bergerac/bergerac.html' },
        { name: 'Bergues', url: '../../Villes_B/Bergues/bergues.html' },
        { name: 'Bernay', url: '../../Villes_B/Bernay/bernay.html' },
        { name: 'Besancon', url: '../../Villes_B/Besancon/besancon.html' },
        { name: 'Besse', url: '../../Villes_B/Besse/besse.html' },
        { name: 'Bessines', url: '../../Villes_B/Bessines/bessines.html' },
        { name: 'Bethleem', url: '../../Villes_B/Bethleem/bethleem.html' },
        { name: 'Bethune', url: '../../Villes_B/Bethune/bethune.html' },
        { name: 'Beziers', url: '../../Villes_B/Beziers/beziers.html' },
        { name: 'Billom', url: '../../Villes_B/Billom/billom.html' },
        { name: 'Binche', url: '../../Villes_B/Binche/binche.html' },
        { name: 'Bitche', url: '../../Villes_B/Bitche/bitche.html' },
        { name: 'Blain', url: '../../Villes_B/Blain/blain.html' },
        { name: 'Blamont24', url: '../../Villes_B/Blamont24/blamont24.html' },
        { name: 'Blamont52', url: '../../Villes_B/Blamont52/blamont52.html' },
        { name: 'Le-Blanc', url: '../../Villes_B/Le-Blanc/leBlanc.html' },
        { name: 'Blanzac', url: '../../Villes_B/Blanzac/blanzac.html' },
        { name: 'Blaye', url: '../../Villes_B/Blaye/blaye.html' },
        { name: 'Blere', url: '../../Villes_B/Blere/blere.html' },
        { name: 'Blois', url: '../../Villes_B/Blois/blois.html' },
        { name: 'Blosseville', url: '../../Villes_B/Blosseville/blosseville.html' },
        { name: 'Boen', url: '../../Villes_B/Boen/boen.html' },
        { name: 'Besançon', url: '../../Villes_B/Besançon/besançon.html' },
        { name: 'Boiscommun', url: '../../Villes_B/Boiscommun/boiscommun.html' },
        { name: 'Boissy-St-Leger', url: '../../Villes_B/Boissy-St-Leger/boissyStLeger.html' },
        { name: 'Bolbec', url: '../../Villes_B/Bolbec/bolbec.html' },
        { name: 'Le-Bolhard', url: '../../Villes_B/Le-Bolhard/leBolhard.html' },
        { name: 'Boncourt', url: '../../Villes_B/Boncourt/boncourt.html' },
        { name: 'Bondy', url: '../../Villes_B/Bondy/bondy.html' },
        { name: 'Bonifacio', url: '../../Villes_B/Bonifacio/bonifacio.html' },
        { name: 'Bonnelles', url: '../../Villes_B/Bonnelles/bonnelles.html' },
        { name: 'Bonnetable', url: '../../Villes_B/Bonnetable/bonnetable.html' },
        { name: 'Bonneval', url: '../../Villes_B/Bonneval/bonneval.html' },
        { name: 'Bonnieres', url: '../../Villes_B/Bonnieres/bonnieres.html' },
        { name: 'Bonny', url: '../../Villes_B/Bonny/bonny.html' },
        { name: 'Le-Bordeau-De-Vigny', url: '../../Villes_B/Le-Bordeau-De-Vigny/leBordeauDeVigny.html' },
        { name: 'Bordeaux', url: '../../Villes_B/Bordeaux/bordeaux.html' },
        { name: 'Petite poste de Bordeaux', url: '../../Villes_B/Bordeauxpp/bordeauxpp.html' },
        { name: 'Bort', url: '../../Villes_B/Bort/bort.html' },
        { name: 'Bouchain', url: '../../Villes_B/Bouchain/bouchain.html' },
        { name: 'Boucoiran', url: '../../Villes_B/Boucoiran/boucoiran.html' },
        { name: 'Bouillon', url: '../../Villes_B/Bouillon/bouillon.html' },
        { name: 'Boulay', url: '../../Villes_B/Boulay/boulay.html' },
        { name: 'Boulogne', url: '../../Villes_B/Boulogne/Boulogne.html' },
        { name: 'Boulogne-Sur-Mer', url: '../../Villes_B/Boulogne-Sur-Mer/boulogneSurMer.html' },
        { name: 'Boulou', url: '../../Villes_B/Boulou/boulou.html' },
        { name: 'Bouquenon', url: '../../Villes_B/Bouquenon/bouquenon.html' },
        { name: 'Bourbon-L-Archambault', url: '../../Villes_B/Bourbon-L-Archambault/bourbonLarchambault.html' },
        { name: 'Bourbon-Lancy', url: '../../Villes_B/Bourbon-Lancy/bourbonLancy.html' },
        { name: 'Bourbonne', url: '../../Villes_B/Bourbonne/bourbonne.html' },
        { name: 'Bourbourg', url: '../../Villes_B/Bourbourg/bourbourg.html' },
        { name: 'Bourdeilles', url: '../../Villes_B/Bourdeilles/bourdeilles.html' },
        { name: 'Bourg-Argental', url: '../../Villes_B/Bourg-Argental/bourgArgental.html' },
        { name: 'Bourdon', url: '../../Villes_B/Bourdon/bourdon.html' },
        { name: 'Bourg-D-Oisans', url: '../../Villes_B/Bourg-D-Oisans/bourgDoisans.html' },
        { name: 'Bourg-En-Bresse', url: '../../Villes_B/Bourg-En-Bresse/bourgEnBresse.html' },
        { name: 'Bourg-En-Guyenne', url: '../../Villes_B/Bourg-En-Guyenne/bourgEnGuyenne.html' },
        { name: 'Bourg-La-Reine', url: '../../Villes_B/Bourg-La-Reine/bourgLaReine.html' },
        { name: 'Bourg-St-Andeol', url: '../../Villes_B/Bourg-St-Andeol/bourgStAndeol.html' },
        { name: 'Bourgachard', url: '../../Villes_B/Bourgachard/bourgachard.html' },
        { name: 'Bourganeuf', url: '../../Villes_B/Bourganeuf/bourganeuf.html' },
        { name: 'Bourges', url: '../../Villes_B/Bourges/bourges.html' },
        { name: 'Le-Bourget', url: '../../Villes_B/Le-Bourget/leBourget.html' },
        { name: 'Bourgneuf', url: '../../Villes_B/Bourgneuf/bourgneuf.html' },
        { name: 'Bourgneuf-En-Retz', url: '../../Villes_B/Bourgneuf-En-Retz/bourgneufEnRetz.html' },
        { name: 'Bourgoin', url: '../../Villes_B/Bourgoin/bourgoin.html' },
        { name: 'Bourgtheroulde', url: '../../Villes_B/Bourgtheroulde/bourgtheroulde.html' },
        { name: 'Bourgueil', url: '../../Villes_B/Bourgueil/bourgueil.html' },
        { name: 'Bourmont', url: '../../Villes_B/Bourmont/bourmont.html' },
        { name: 'Boussac', url: '../../Villes_B/Boussac/boussac.html' },
        { name: 'Bouxwiller', url: '../../Villes_B/Bouxwiller/bouxwiller.html' },
        { name: 'Bouzonville', url: '../../Villes_B/Bouzonville/bounzoville.html' },
        { name: 'Boynes', url: '../../Villes_B/Boynes/boynes.html' },
        { name: 'Braisne', url: '../../Villes_B/Braisne/braisne.html' },
        { name: 'Bray-Sur-Seine', url: '../../Villes_B/Bray-Sur-Seine/braySurSeine.html' },
        { name: 'Brecey', url: '../../Villes_B/Brecey/brecey.html' },
        { name: 'Bressuire', url: '../../Villes_B/Bressuire/bressuire.html' },
        { name: 'Brest', url: '../../Villes_B/Brest/brest.html' },
        { name: 'La-Breteche', url: '../../Villes_B/La-Breteche/Labreteche.html' },
        { name: 'Breteuil (26)', url: '../../Villes_B/Breteuil26/breteuil26.html' },
        { name: 'Breteuil (58)', url: '../../Villes_B/Breteuil58/breteuil58.html' },
        { name: 'Brezolles', url: '../../Villes_B/Brezolles/brezolles.html' },
        { name: 'Briancon', url: '../../Villes_B/Briancon/briancon.html' },
        { name: 'Briare', url: '../../Villes_B/Briare/briare.html' },
        { name: 'Brie-Comte-Robert', url: '../../Villes_B/Brie-Comte-Robert/brieComteRobert.html' },
        { name: 'Brienne-Le-Chateau', url: '../../Villes_B/Brienne-Le-Chateau/brienneLeChateau.html' },
        { name: 'Brienon-L-archeveque', url: '../../Villes_B/Brienon-L-archeveque/brienonLarcheveque.html' },
        { name: 'Briey', url: '../../Villes_B/Briey/briey.html' },
        { name: 'Brignoles', url: '../../Villes_B/Brignoles/brignoles.html' },
        { name: 'Brillac', url: '../../Villes_B/Brillac/brillac.html' },
        { name: 'Brionne', url: '../../Villes_B/Brionne/brionne.html' },
        { name: 'Brioude', url: '../../Villes_B/Brioude/brioude.html' },
        { name: 'Brisach', url: '../../Villes_B/Brisach/brisach.html' },
        { name: 'Brissac', url: '../../Villes_B/Brissac/brissac.html' },
        { name: 'Brive', url: '../../Villes_B/Brive/brive.html' },
        { name: 'Broons', url: '../../Villes_B/Broons/broons.html' },
        { name: 'Brou', url: '../../Villes_B/Brou/brou.html' },
        { name: 'Brouage', url: '../../Villes_B/Brouage/brouage.html' },
        { name: 'Brunoy', url: '../../Villes_B/Brunoy/brunoy.html' },
        { name: 'Bruyeres', url: '../../Villes_B/Bruyeres/bruyeres.html' },
        { name: 'Buchy', url: '../../Villes_B/Buchy/buchy.html' },
        { name: 'Le-Bugue', url: '../../Villes_B/Le-Bugue/leBugue.html' },
        { name: 'Le-Buis', url: '../../Villes_B/Le-Buis/leBuis.html' },
        { name: 'La-Buissiere', url: '../../Villes_B/La-Buissiere/laBuissiere.html' },
        { name: 'Buzancais', url: '../../Villes_B/Buzancais/buzancais.html' },
        { name: 'Buzancy', url: '../../Villes_B/Buzancy/buzancy.html' },   
    ],
    C: [
        { name: 'Cadenet', url: '../../../laPosteDeLancienneFrance/Villes C/Cadenet/cadenet.html' },
        { name: 'Cadillac', url: '../../../laPosteDeLancienneFrance/Villes C/Cadillac/cadillac.html' },
        { name: 'Caen', url: '../../../laPosteDeLancienneFrance/Villes C/Caen/caen.html' },
        { name: 'Cahors', url: '../../../laPosteDeLancienneFrance/Villes C/Cahors/cahors.html' },
        { name: 'Calais', url: '../../../laPosteDeLancienneFrance/Villes C/Calais/calais.html' },
        { name: 'Calvi', url: '../../../laPosteDeLancienneFrance/Villes C/Calvi/calvi.html' },
        { name: 'Cahusac', url: '../../../laPosteDeLancienneFrance/Villes C/Cahusac/cahusac.html' },
        { name: 'Calvisson', url: '../../../laPosteDeLancienneFrance/Villes C/Calvisson/calvisson.html' },
        { name: 'Camaret', url: '../../../laPosteDeLancienneFrance/Villes C/Camaret/camaret.html' },
        { name: 'Cambrai', url: '../../../laPosteDeLancienneFrance/Villes C/Cambrai/cambrai.html' },
        { name: 'Cande', url: '../../../laPosteDeLancienneFrance/Villes C/Cande/cande.html' },
        { name: 'Cannes', url: '../../../laPosteDeLancienneFrance/Villes C/Cannes/cannes.html' },
        { name: 'Cany', url: '../../../laPosteDeLancienneFrance/Villes C/Cany/cany.html' },
        { name: 'Caraman', url: '../../../laPosteDeLancienneFrance/Villes C/Caraman/caraman.html' },
        { name: 'Carcassonne', url: '../../../laPosteDeLancienneFrance/Villes C/Carcassonne/carcassonne.html' },
        { name: 'Carentan', url: '../../../laPosteDeLancienneFrance/Villes C/Carentan/carentan.html' },
        { name: 'Carhaix', url: '../../../laPosteDeLancienneFrance/Villes C/Carhaix/carhaix.html' },
        { name: 'Carignan', url: '../../../laPosteDeLancienneFrance/Villes C/Carignan/carignan.html' },
        { name: 'La Carla Bayle', url: '../../../laPosteDeLancienneFrance/Villes C/CarlaBayle/carlaBayle.html' },
        { name: 'Carpentras', url: '../../../laPosteDeLancienneFrance/Villes C/Carpentras/carpentras.html' },
        { name: 'Carrouge', url: '../../../laPosteDeLancienneFrance/Villes C/Carrouge/carrouge.html' },
        { name: 'Carvin', url: '../../../laPosteDeLancienneFrance/Villes C/Carvin/carvin.html' },
        { name: 'Casal', url: '../../../laPosteDeLancienneFrance/Villes C/Casal/casal.html' },
        { name: 'Cassel', url: '../../../laPosteDeLancienneFrance/Villes C/Cassel/cassel.html' },
        { name: 'Cassis', url: '../../../laPosteDeLancienneFrance/Villes C/Cassis/cassis.html' },
        { name: 'Castelfranc', url: '../../../laPosteDeLancienneFrance/Villes C/Castelfranc/castelfranc.html' },
        { name: 'Castellane', url: '../../../laPosteDeLancienneFrance/Villes C/Castellane/castellane.html' },
        { name: 'Castelnau de Magnoac', url: '../../../laPosteDeLancienneFrance/Villes C/Castelnau/castelnau.html' },
        { name: 'Castelnau de Médoc', url: '../../../laPosteDeLancienneFrance/Villes C/Castelnau32/castelnau32.html' },
        { name: 'Castelnau de Montratier', url: '../../../laPosteDeLancienneFrance/Villes C/castelnau44/castelnau44.html' },
        { name: 'Castelnaudary', url: '../../../laPosteDeLancienneFrance/Villes C/Castelnaudary/castelnaudary.html' },
        { name: 'Castelsarrasin', url: '../../../laPosteDeLancienneFrance/Villes C/Castelsarrasin/castelsarrasin.html' },
        { name: 'Castillon', url: '../../../laPosteDeLancienneFrance/Villes C/Castillon/castillon.html' },
        { name: 'Castre', url: '../../../laPosteDeLancienneFrance/Villes C/Castre/castre.html' },
        { name: 'Castre en Guyenne', url: '../../../laPosteDeLancienneFrance/Villes C/Castre32/castresEnGuyenne.html.html' },
        { name: 'Cateau Cambrésis', url: '../../../laPosteDeLancienneFrance/Villes C/CateauCambresis/cateauCambresis.html' },
        { name: 'Le Catelet', url: '../../../laPosteDeLancienneFrance/Villes C/Catelet/catelet.html' },
        { name: 'Caudebec', url: '../../../laPosteDeLancienneFrance/Villes L/Caudebec/caudebec.html' },
        { name: 'Caudrot', url: '../../../laPosteDeLancienneFrance/Villes C/Caudrot/caudrot.html' },
        { name: 'Caudry', url: '../../../laPosteDeLancienneFrance/Villes C/Caudry/caudry.html' },
        { name: 'Caussade', url: '../../../laPosteDeLancienneFrance/Villes C/Caussade/caussade.html' },
        { name: 'Cauterets', url: '../../../laPosteDeLancienneFrance/Villes C/Cauterets/cauterets.html' },
        { name: 'Cavaillon', url: '../../../laPosteDeLancienneFrance/Villes C/Cavaillon/cavaillon.html' },
        { name: 'Cavignac', url: '../../../laPosteDeLancienneFrance/Villes C/Cavignac/cavignac.html' },
        { name: 'Caylus', url: '../../../laPosteDeLancienneFrance/Villes C/Caylus/caylus.html' },
        { name: 'Cazeres', url: '../../../laPosteDeLancienneFrance/Villes C/Cazeres/cazeres.html' },
        { name: 'Cercles', url: '../../../laPosteDeLancienneFrance/Villes C/Cercles/cercles.html' },
        { name: 'Cerdon', url: '../../../laPosteDeLancienneFrance/Villes C/Cerdon/cerdon.html' },
        { name: 'Céret', url: '../../../laPosteDeLancienneFrance/Villes C/Ceret/ceret.html' },
        { name: 'Cernay', url: '../../../laPosteDeLancienneFrance/Villes C/Cernay/cernay.html' },
        { name: 'Cervione', url: '../../../laPosteDeLancienneFrance/Villes C/Cervione/cervione.html' },
        { name: 'Cette', url: '../../../laPosteDeLancienneFrance/Villes C/Cette/cette.html' },
        { name: 'Chabanais', url: '../../../laPosteDeLancienneFrance/Villes C/Chabanais/chabanais.html' },
        { name: 'Chablis', url: '../../../laPosteDeLancienneFrance/Villes C/Chablis/chablis.html' },
        { name: 'Chagny', url: '../../../laPosteDeLancienneFrance/Villes C/Chagny/chagny.html' },
        { name: 'La Chaise-Dieu', url: '../../../laPosteDeLancienneFrance/Villes CChaiseDieu/chaiseDieu/.html' },
        { name: 'Chalabre', url: '../../../laPosteDeLancienneFrance/Villes C/Chalabre/chalabre.html' },
        { name: 'Chalamont', url: '../../../laPosteDeLancienneFrance/Villes C/Chalamont/chalamont.html' },
        { name: 'Le Chalard', url: '../../../laPosteDeLancienneFrance/Villes C/Chalard/chalard.html' },
        { name: 'Chalaure', url: '../../../laPosteDeLancienneFrance/Villes C/Chalaure/chalaure.html' },
        { name: 'Challans', url: '../../../laPosteDeLancienneFrance/Villes C/Challans/challans.html' },
        { name: 'halon sur Saône', url: '../../../laPosteDeLancienneFrance/Villes C/Chalon/chalon.html' },
        { name: 'Chalon Sur Marne', url: '../../../laPosteDeLancienneFrance/Villes C/Chalon49/chalonsSurMarne.html' },
        { name: 'Chalus', url: '../../../laPosteDeLancienneFrance/Villes C/Chalus/chalus.html' },
        { name: 'Chambly', url: '../../../laPosteDeLancienneFrance/Villes C/Chambly/chambly.html' },
        { name: 'Chambon', url: '../../../laPosteDeLancienneFrance/Villes C/Chambon/chambon.html' },
        { name: 'Chambord', url: '../../../laPosteDeLancienneFrance/Villes C/Chambord/chambord.html' },
        { name: 'Chambrais', url: '../../../laPosteDeLancienneFrance/Villes C/Chambrais/chambrais.html' },
        { name: 'Champagnole', url: '../../../laPosteDeLancienneFrance/Villes C/Champagnole/champagnole.html' },
        { name: 'Champigny', url: '../../../laPosteDeLancienneFrance/Villes C/Champigny/champigny.html' },
        { name: 'Champlitte', url: '../../../laPosteDeLancienneFrance/Villes C/Champlitte/champlitte.html' },
        { name: 'Champrond', url: '../../../laPosteDeLancienneFrance/Villes C/Champrond/champrond.html' },
        { name: 'Chanceaux', url: '../../../laPosteDeLancienneFrance/Villes C/Chanceaux/chanceaux.html' },
        { name: 'Chanteloube', url: '../../../laPosteDeLancienneFrance/Villes C/Chanteloube/chanteloube.html' },
        { name: 'Chantilly', url: '../../../laPosteDeLancienneFrance/Villes C/Chantilly/chantilly.html' },
        { name: 'Chantonnay', url: '../../../laPosteDeLancienneFrance/Villes C/Chantonnay/chantonnay.html' },
        { name: 'Chaource', url: '../../../laPosteDeLancienneFrance/Villes C/Chaource/chaource.html' },
        { name: 'Charente', url: '../../../laPosteDeLancienneFrance/Villes C/Charente/charente.html' },
        { name: 'Charenton', url: '../../../laPosteDeLancienneFrance/Villes C/Charenton/charenton.html' },
        { name: 'La Charite', url: '../../../laPosteDeLancienneFrance/Villes C/Charite/charite.html' },
        { name: 'Charlemont', url: '../../../laPosteDeLancienneFrance/Villes C/Charlemont/charlemont.html' },
        { name: 'Charleroi', url: '../../../laPosteDeLancienneFrance/Villes C/Charleroi/charleroi.html' },
        { name: 'Charleville', url: '../../../laPosteDeLancienneFrance/Villes C/Charleville/charleville.html' },
        { name: 'Charly', url: '../../../laPosteDeLancienneFrance/Villes C/Charly/charly.html' },
        { name: 'Charmes', url: '../../../laPosteDeLancienneFrance/Villes C/Charmes/charmes.html' },
        { name: 'Charolles', url: '../../../laPosteDeLancienneFrance/Villes C/Charolles/charolles.html' },
        { name: 'Charost', url: '../../../laPosteDeLancienneFrance/Villes C/Charost/charost.html' },
        { name: 'Chartre sur le Loir', url: '../../../laPosteDeLancienneFrance/Villes C/Chartre/chartreSurLeLoir.html' },
        { name: 'Chartre', url: '../../../laPosteDeLancienneFrance/Villes C/Chartre27/chartres.html' },
        { name: 'Chataigneraie', url: '../../../laPosteDeLancienneFrance/Villes CChataigneraie/chataigneraie/.html' },
        { name: 'Chateau-Chalon', url: '../../../laPosteDeLancienneFrance/Villes C/Chateau1chalon/chateauChalon.html' },
        { name: 'Chateau-Chinon', url: '../../../laPosteDeLancienneFrance/Villes C/Chateau2Chinon/chateauChinon.html' },
        { name: 'Chateau-du-Loir', url: '../../../laPosteDeLancienneFrance/Villes C/Chateau3Loire/chateauDuLoir.html' },
        { name: 'Chateau-Gontier', url: '../../../laPosteDeLancienneFrance/Villes C/Chateau4Gontier/chateauGontier.html' },
        { name: 'Chateau-Landon', url: '../../../laPosteDeLancienneFrance/Villes C/Chateau5Landon/chateauLandon.html' },
        { name: 'Chateau-Porcien', url: '../../../laPosteDeLancienneFrance/Villes C/Chateau6Porcien/chateauPorcien.html' },
        { name: 'Chateau-Renault', url: '../../../laPosteDeLancienneFrance/Villes C/Chateau7Renault/chateauRenault.html' },
        { name: 'Chateau-Salins', url: '../../../laPosteDeLancienneFrance/Villes C/Chateau8Salins/chateauSalins.html' },
        { name: 'Chateau-Thierry', url: '../../../laPosteDeLancienneFrance/Villes C/Chateau9Thierry/chateauThierry.html' },
        { name: 'Chateau-Villain', url: '../../../laPosteDeLancienneFrance/Villes C/Chateau10Villain/chateauVillain.html' },
        { name: 'Chateaubriant', url: '../../../laPosteDeLancienneFrance/Villes C/Chateaubriant/chateaubriant.html' },
        { name: 'Chateaudun', url: '../../../laPosteDeLancienneFrance/Villes C/Chateaudun/chateaudun.html' },
        { name: 'Chateaulin', url: '../../../laPosteDeLancienneFrance/Villes C/Chateaulin/chateaulin.html' },
        { name: 'Chateaumeillant', url: '../../../laPosteDeLancienneFrance/Villes C/Chateaumeillant/chateaumeillant.html' },
        { name: 'Chateauneuf', url: '../../../laPosteDeLancienneFrance/Villes C/Chateauneuf1/Chateauneuf.html' },
        { name: 'Chateauneuf de Bretagne', url: '../../../laPosteDeLancienneFrance/Villes C/Chateauneuf2deBretagne/chateaunefDeBretagne.html' },
        { name: 'Chateauneuf sur Cher', url: '../../../laPosteDeLancienneFrance/Villes C/Chateauneuf3surCher/chateaneufSurCher.html' },
        { name: 'Chateauneuf en Thymerais', url: '../../../laPosteDeLancienneFrance/Villes C/Chateauneuf4enThymerais/chateaunefEnThymerais.html' },
        { name: 'Chateauroux', url: '../../../laPosteDeLancienneFrance/Villes C/Chateauroux/chateauroux.html' },
        { name: 'Chatel sur Moselle', url: '../../../laPosteDeLancienneFrance/Villes C/Chatel/chatelSurMoselle.html' },
        { name: 'Chatelaudren', url: '../../../laPosteDeLancienneFrance/Villes C/Chatelaudren/chatelaudren.html' },
        { name: 'Le chatelet en Brie', url: '../../../laPosteDeLancienneFrance/Villes C/ChateletEnBrie/leChateletEnBrie.html' },
        { name: 'Chatellerault', url: '../../../laPosteDeLancienneFrance/Villes C/Chatellerault/chatellerault.html' },
        { name: 'Chatillon de Michaille', url: '../../../laPosteDeLancienneFrance/Villes C/Chatillon1deMichaille/chatillonDeMichaille.html' },
        { name: 'Chatillon les Dombes', url: '../../../laPosteDeLancienneFrance/Villes C/Chatillon2LesDombes/chatillonLesDombes.html' },
        { name: 'Chatillon sur Indre', url: '../../../laPosteDeLancienneFrance/Villes C/Chatillon3SurIndre/chatillonSurIndre.html' },
        { name: 'Chatillon sur Loing', url: '../../../laPosteDeLancienneFrance/Villes C/Chatillon4SurLoing/chatillonSurLoing.html' },
        { name: 'Chatillon sur Loire', url: '../../../laPosteDeLancienneFrance/Villes C/Chatillon5SurLoire/chatillonSurLoire.html' },
        { name: 'Chatillon sur Marne', url: '../../../laPosteDeLancienneFrance/Villes C/Chatillon6SurMarne/chatillonSurMarne.html' },
        { name: 'Chatillon sur Seine', url: '../../../laPosteDeLancienneFrance/Villes C/Chatillon7SurSeine/chatillonSurSeine.html' },
        { name: 'Chatillon sur Sevre', url: '../../../laPosteDeLancienneFrance/Villes C/Chatillon8SurSevre/chatillonSurSevre.html' },
        { name: 'Chatou', url: '../../../laPosteDeLancienneFrance/Villes C/Chatou/chatou.html' },
        { name: 'La Chatre', url: '../../../laPosteDeLancienneFrance/Villes C/Chatre/laChatre.html' },
        { name: 'Chaudesaigues', url: '../../../laPosteDeLancienneFrance/Villes C/Chaudesaigues/chaudesaigues.html' },
        { name: 'Chaumes', url: '../../../laPosteDeLancienneFrance/Villes C/Chaumes/chaumes.html' },
        { name: 'Chaumont en Bassigny', url: '../../../laPosteDeLancienneFrance/Villes C/Chaumont50/chaumontEnBassigny.html' },
        { name: 'Chaumont en Vexin', url: '../../../laPosteDeLancienneFrance/Villes C/Chaumont58/chaumontEnVexin.html' },
        { name: 'Chaunai', url: '../../../laPosteDeLancienneFrance/Villes C/Chaunai/chaunai.html' },
        { name: 'Chauny', url: '../../../laPosteDeLancienneFrance/Villes C/Chauny/chauny.html' },
        { name: 'La Chaussee', url: '../../../laPosteDeLancienneFrance/Villes C/Chaussee/laChaussee.html' },
        { name: 'Chauvigny', url: '../../../laPosteDeLancienneFrance/Villes C/Chauvigny/chauvigny.html' },
        { name: 'Chazelles', url: '../../../laPosteDeLancienneFrance/Villes C/Chazelles/chazelles.html' },
        { name: 'Chef Boutonne', url: '../../../laPosteDeLancienneFrance/Villes C/ChefBoutonne/chefBoutonne.html' },
        { name: 'Chelles', url: '../../../laPosteDeLancienneFrance/Villes C/Chelles/chelles.html' },
        { name: 'Chemille', url: '../../../laPosteDeLancienneFrance/Villes C/Chemille/chemille.html' },
        { name: 'Chenerailles', url: '../../../laPosteDeLancienneFrance/Villes C/Chenerailles/chenerailles.html' },
        { name: 'Cherbourg', url: '../../../laPosteDeLancienneFrance/Villes C/Cherbourg/cherbourg.html' },
        { name: 'Cheroy', url: '../../../laPosteDeLancienneFrance/Villes C/Cheroy/cheroy.html' },
        { name: 'Chevilly', url: '../../../laPosteDeLancienneFrance/Villes C/Chevilly/chevilly.html' },
        { name: 'Chevreuse', url: '../../../laPosteDeLancienneFrance/Villes C/Chevreuse/chevreuse.html' },
        { name: 'Chezy', url: '../../../laPosteDeLancienneFrance/Villes C/Chezy/chezy.html' },
        { name: 'Chilleurs', url: '../../../laPosteDeLancienneFrance/Villes C/Chilleurs/chilleurs.html' },
        { name: 'Chinon', url: '../../../laPosteDeLancienneFrance/Villes C/Chinon/chinon.html' },
        { name: 'Choisy le Roi', url: '../../../laPosteDeLancienneFrance/Villes C/Choisy/choisyLeRoi.html' },
        { name: 'Cholet', url: '../../../laPosteDeLancienneFrance/Villes C/Cholet/cholet.html' },
        { name: 'Chomerac', url: '../../../laPosteDeLancienneFrance/Villes C/Chomerac/chomerac.html' },
        { name: 'Chorges', url: '../../../laPosteDeLancienneFrance/Villes C/Chorges/chorges.html' },
        { name: 'Chouze', url: '../../../laPosteDeLancienneFrance/Villes C/Chouze/chouze.html' },
        { name: 'Cingetabelle', url: '../../../laPosteDeLancienneFrance/Villes C/Cingetabelle/cingetabelle.html' },
        { name: 'Cintrey', url: '../../../laPosteDeLancienneFrance/Villes C/Cintrey/cintrey.html' },
        { name: 'La Ciotat', url: '../../../laPosteDeLancienneFrance/Villes C/Ciotat/laCiotat.html' },
        { name: 'Cirey S Blaise', url: '../../../laPosteDeLancienneFrance/Villes C/Cirey/cireySBlaise.html' },
        { name: 'Civray', url: '../../../laPosteDeLancienneFrance/Villes C/Civray/civray.html' },
        { name: 'Cizay', url: '../../../laPosteDeLancienneFrance/Villes C/Cizay/cizay.html' },
        { name: 'Clairac', url: '../../../laPosteDeLancienneFrance/Villes C/Clairac/clairac.html' },
        { name: 'Clairvaux', url: '../../../laPosteDeLancienneFrance/Villes C/Clairvaux/clairvaux.html' },
        { name: 'Clamecy', url: '../../../laPosteDeLancienneFrance/Villes C/Clamecy/clamecy.html' },
        { name: 'Claye', url: '../../../laPosteDeLancienneFrance/Villes C/Claye/Claye.html' },
        { name: 'La Clayette', url: '../../../laPosteDeLancienneFrance/Villes C/Clayette/laClayette.html' },
        { name: 'Clermont en Argonne', url: '../../../laPosteDeLancienneFrance/Villes C/Clermont1/clermontEnArgonne.html' },
        { name: 'Clermont en Beauvoisis', url: '../../../laPosteDeLancienneFrance/Villes C/Clermont2/clermontEnBeauvoisis.html' },
        { name: 'Clermont Ferrand', url: '../../../laPosteDeLancienneFrance/Villes C/Clermont3/clermontFerrand.html' },
        { name: 'Clermont Lodeve', url: '../../../laPosteDeLancienneFrance/Villes C/Clermont4/clermontLodeve.html' },
        { name: 'Clerval', url: '../../../laPosteDeLancienneFrance/Villes C/Clerval/clerval.html' },
        { name: 'Clery', url: '../../../laPosteDeLancienneFrance/Villes C/Clery/clery.html' },
        { name: 'Clisson', url: '../../../laPosteDeLancienneFrance/Villes C/Clisson/clisson.html' },
        { name: 'Cloyes', url: '../../../laPosteDeLancienneFrance/Villes C/Cloyes/cloyes.html' },
        { name: 'Cluny', url: '../../../laPosteDeLancienneFrance/Villes C/Cluny/cluny.html' },
        { name: 'Cocherel', url: '../../../laPosteDeLancienneFrance/Villes C/Cocherel/cocherel.html' },
        { name: 'Cognac', url: '../../../laPosteDeLancienneFrance/Villes C/Cognac/cognac.html' },
        { name: 'Coillure', url: '../../../laPosteDeLancienneFrance/Villes C/Coillure/coillure.html' },
        { name: 'Coincy', url: '../../../laPosteDeLancienneFrance/Villes C/Coincy/coincy.html' },
        { name: 'Collobrieres', url: '../../../laPosteDeLancienneFrance/Villes C/Collobrieres/collobrieres.html' },
        { name: 'Collonges', url: '../../../laPosteDeLancienneFrance/Villes C/Collonges/collonges.html' },
        { name: 'Colmar', url: '../../../laPosteDeLancienneFrance/Villes C/Colmar/colmar.html' },
        { name: 'Colmars', url: '../../../laPosteDeLancienneFrance/Villes C/Colmars/colmars.html' },
        { name: 'Colombey', url: '../../../laPosteDeLancienneFrance/Villes C/Colombey/colombey.html' },
        { name: 'Combouin', url: '../../../laPosteDeLancienneFrance/Villes C/Combouin/combouin.html' },
        { name: 'Combourg', url: '../../../laPosteDeLancienneFrance/Villes C/Combourg/combourg.html' },
        { name: 'Commercy', url: '../../../laPosteDeLancienneFrance/Villes C/Commercy/commercy.html' },
        { name: 'Compiegne', url: '../../../laPosteDeLancienneFrance/Villes C/Compiegne/compiegne.html' },
        { name: 'Concarneau', url: '../../../laPosteDeLancienneFrance/Villes C/Concarneau/concarneau.html' },
        { name: 'Conches', url: '../../../laPosteDeLancienneFrance/Villes C/Conches/conches.html' },
        { name: 'Conde', url: '../../../laPosteDeLancienneFrance/Villes C/Conde/conde.html' },
        { name: 'Conde sur Noireau', url: '../../../laPosteDeLancienneFrance/Villes C/Conde13/condeSurNoireau.html' },
        { name: 'Condom', url: '../../../laPosteDeLancienneFrance/Villes C/condom/Condom.html' },
        { name: 'Condrieux', url: '../../../laPosteDeLancienneFrance/Villes C/Condrieux/condrieux.html' },
        { name: 'Confolens', url: '../../../laPosteDeLancienneFrance/Villes C/Confolens/confolens.html' },
        { name: 'Connerre', url: '../../../laPosteDeLancienneFrance/Villes C/Connerre/connerre.html' },
        { name: 'Corbeil', url: '../../../laPosteDeLancienneFrance/Villes C/Corbeil/corbeil.html' },
        { name: 'Corbie', url: '../../../laPosteDeLancienneFrance/Villes C/Corbie/corbie.html' },
        { name: 'Corbeny', url: '../../../laPosteDeLancienneFrance/Villes C/Corbeny/corbeny.html' },
        { name: 'Corbigny', url: '../../../laPosteDeLancienneFrance/Villes C/Corbigny/corbigny.html' },
        { name: 'Cordes', url: '../../../laPosteDeLancienneFrance/Villes C/Cordes/cordes.html' },
        { name: 'Cormoz', url: '../../../laPosteDeLancienneFrance/Villes C/Cormoz/cormoz.html' },
        { name: 'Corps', url: '../../../laPosteDeLancienneFrance/Villes C/Corps/corps.html' },
        { name: 'Corse', url: '../../../laPosteDeLancienneFrance/Villes C/Corse/corse.html' },
        { name: 'Corte', url: '../../../laPosteDeLancienneFrance/Villes C/Corte/Ccorte.html' },
        { name: 'Cosne', url: '../../../laPosteDeLancienneFrance/Villes C/Cosne/cosne.html' },
        { name: 'La Cote St Andre', url: '../../../laPosteDeLancienneFrance/Villes C/CoteStAndre/coteStAndre.html' },
        { name: 'Cotignac', url: '../../../laPosteDeLancienneFrance/Villes C/Cotignac/cotignac.html' },
        { name: 'Coubert', url: '../../../laPosteDeLancienneFrance/Villes C/Coubert/coubert.html' },
        { name: 'Couches', url: '../../../laPosteDeLancienneFrance/Villes C/Couches/couches.html' },
        { name: 'Couhe', url: '../../../laPosteDeLancienneFrance/Villes C/Couhe/couhe.html' },
        { name: 'Coulanges sur Yonne', url: '../../../laPosteDeLancienneFrance/Villes C/Coulanges/coulangesSurYonne.html' },
        { name: 'Coullomiers', url: '../../../laPosteDeLancienneFrance/Villes C/Coullomiers/coullomiers.html' },
        { name: 'Courgivaux', url: '../../../laPosteDeLancienneFrance/Villes C/Courgivaux/courgivaux.html' },
        { name: 'Courson', url: '../../../laPosteDeLancienneFrance/Villes C/Courson/courson.html' },
        { name: 'Courtanvault S Loir', url: '../../../laPosteDeLancienneFrance/Villes C/Courtanvault/courtanvaultSurLoir.html' },
        { name: 'Courtenay', url: '../../../laPosteDeLancienneFrance/Villes C/Courtenay/courtenay.html' },
        { name: 'Courtomer', url: '../../../laPosteDeLancienneFrance/Villes C/Courtomer/courtomer.html' },
        { name: 'Courtrai', url: '../../../laPosteDeLancienneFrance/Villes C/Courtrai/courtrai.html' },
        { name: 'Courville', url: '../../../laPosteDeLancienneFrance/Villes C/Courville/courville.html' },
        { name: 'Coutances', url: '../../../laPosteDeLancienneFrance/Villes C/Coutances/coutances.html' },
        { name: 'Couterne', url: '../../../laPosteDeLancienneFrance/Villes C/Couterne/couterne.html' },
        { name: 'Coutras', url: '../../../laPosteDeLancienneFrance/Villes C/Coutras/coutras.html' },
        { name: 'Couture', url: '../../../laPosteDeLancienneFrance/Villes C/Couture/couture.html' },
        { name: 'Cozes', url: '../../../laPosteDeLancienneFrance/Villes C/Cozes/cozes.html' },
        { name: 'Craon', url: '../../../laPosteDeLancienneFrance/Villes C/Craon/craon.html' },
        { name: 'Craponne', url: '../../../laPosteDeLancienneFrance/Villes C/Craponne/craponne.html' },
        { name: 'Crecy En Brie', url: '../../../laPosteDeLancienneFrance/Villes C/CrecyEnBrie/crecyEnBrie.html' },
        { name: 'Creil', url: '../../../laPosteDeLancienneFrance/Villes C/Creil/creil.html' },
        { name: 'Cremieu', url: '../../../laPosteDeLancienneFrance/Villes C/Cremieu/cremieu.html' },
        { name: 'Crepy en Valois', url: '../../../laPosteDeLancienneFrance/Villes C/Crepy/crepyEnValois.html' },
        { name: 'Cressensac', url: '../../../laPosteDeLancienneFrance/Villes C/Cressensac/crenssensac.html' },
        { name: 'Crest', url: '../../../laPosteDeLancienneFrance/Villes C/Crest/crest.html' },
        { name: 'Crevecoeur', url: '../../../laPosteDeLancienneFrance/Villes C/Crevecoeur/crevecoeur.html' },
        { name: 'Croissanville', url: '../../../laPosteDeLancienneFrance/Villes C/Croissanville/croissanville.html' },
        { name: 'Crolles', url: '../../../laPosteDeLancienneFrance/Villes C/Crolles/crolles.html' },
        { name: 'Cuers', url: '../../../laPosteDeLancienneFrance/Villes C/Cuers/cuers.html' },
        { name: 'Cuges', url: '../../../laPosteDeLancienneFrance/Villes C/Cuges/cuges.html' },
        { name: 'Culan', url: '../../../laPosteDeLancienneFrance/Villes C/Culan/culan.html' },

    ], D: [], E: [], F: [], G: [], H: [], I: [], J: [], K: [],
    L: [], M: [], N: [], O: [], P: [], Q: [], R: [], S: [], T: [],
    U: [], V: [], W: [], X: [], Y: [], Z: [],
  };

 /* --------- 1) DOM --------- */
  const input = document.getElementById('villeInput');
  const panel = document.getElementById('dropdownContent');
  if (!input || !panel) return;

  /* --------- 2) ARIA --------- */
  input.setAttribute('role', 'combobox');
  input.setAttribute('aria-autocomplete', 'list');
  input.setAttribute('aria-expanded', 'false');
  input.setAttribute('aria-controls', 'dropdownContent');
  panel.setAttribute('role', 'listbox');

  /* --------- 3) Utils --------- */
  const stripDiacritics = (s) =>
    s && s.normalize ? s.normalize('NFD').replace(/[\u0300-\u036f]/g, '') : (s || '');

  const norm = (str) => stripDiacritics(String(str || '')).toLowerCase();

  function debounce(fn, delay = 120) {
    let t;
    return (...args) => {
      clearTimeout(t);
      t = setTimeout(() => fn(...args), delay);
    };
  }

  function sanitizeUrl(u) {
    if (!u) return '';
    let s = String(u);
    s = s.replace(/(^|[^:])\/{2,}/g, '$1/');  // évite // non schéma
    s = s.replace(/(\.html)\/+$/i, '$1');     // supprime / après .html
    return s;
  }

  function highlight(label, query) {
    const A = norm(label), B = norm(query), i = A.indexOf(B);
    if (i === -1 || !B) return label;
    return (
      label.slice(0, i) +
      '<span class="match">' +
      label.slice(i, i + query.length) +
      '</span>' +
      label.slice(i + query.length)
    );
  }

  function rankResults(items, q) {
    const nq = norm(q);
    return items.sort((a, b) => {
      const an = norm(a.name), bn = norm(b.name);
      const aStarts = an.startsWith(nq) ? 0 : 1;
      const bStarts = bn.startsWith(nq) ? 0 : 1;
      if (aStarts !== bStarts) return aStarts - bStarts;
      if (an.length !== bn.length) return an.length - bn.length;
      return an.localeCompare(bn);
    });
  }

  function buildUnifiedIndex(byLetter) {
    const letters = Object.keys(byLetter).sort();
    const flat = letters.reduce((acc, letter) => {
      const arr = Array.isArray(byLetter[letter]) ? byLetter[letter] : [];
      for (const v of arr) acc.push(v);
      return acc;
    }, []);
    return flat.map(v => {
      const name = v.name || '';
      const href = sanitizeUrl(v.url || v.href || '');
      const base = name.replace(/[-’'`]/g, ' ');
      const aliases = [
        base,
        base.replace(/\s+/g, ''),
        base.replace(/\s+/g, '-'),
        base.replace(/\s+/g, '_'),
      ];
      return { name, href, aliases };
    });
  }

  function search(INDEX, query) {
    const nq = norm(query);
    if (!nq) return INDEX.slice(0, 2000);
    const res = INDEX.filter(v => {
      const pool = [v.name, ...(v.aliases || [])].map(norm);
      return pool.some(s => s.includes(nq));
    });
    return rankResults(res, query).slice(0, 50);
  }

  /* --------- 4) Index + état --------- */
  const INDEX_ALL = buildUnifiedIndex(VILLES_BY_LETTER);
  let activeIndex = -1;
  let currentResults = [];

  /* --------- 5) Rendu --------- */
  function ensurePanelOpenState(open) {
    panel.classList.toggle('open', !!open);
    panel.style.display = open ? 'block' : 'none';
    input.setAttribute('aria-expanded', open ? 'true' : 'false');
  }

  function setActiveItem(index) {
    const items = [...panel.querySelectorAll('.dropdown-item')];
    items.forEach((el, i) => el.classList.toggle('active', i === index));
    const activeEl = items[index];
    if (activeEl) {
      const { offsetTop, offsetHeight } = activeEl;
      const visibleTop = panel.scrollTop;
      const visibleBottom = visibleTop + panel.clientHeight;
      if (offsetTop < visibleTop) panel.scrollTop = offsetTop;
      else if (offsetTop + offsetHeight > visibleBottom)
        panel.scrollTop = offsetTop - panel.clientHeight + offsetHeight;
      input.setAttribute('aria-activedescendant', activeEl.id);
    } else {
      input.removeAttribute('aria-activedescendant');
    }
  }

  function renderPanel(results, query) {
    panel.innerHTML = '';
    currentResults = results;

    if (!results.length) {
      ensurePanelOpenState(false);
      activeIndex = -1;
      return;
    }

    results.forEach((v, idx) => {
      const div = document.createElement('div');
      div.className = 'dropdown-item';
      div.setAttribute('role', 'option');
      div.setAttribute('id', `ville-opt-${idx}`);
      div.innerHTML = highlight(v.name, query);
      div.addEventListener('mousedown', (e) => {
        e.preventDefault();
        if (v.href) window.location.href = v.href;
      });
      panel.appendChild(div);
    });

    ensurePanelOpenState(true);
    activeIndex = 0;
    setActiveItem(activeIndex);
  }

  /* --------- 6) Événements --------- */
  const updateList = debounce(() => {
    const q = input.value.trim();
    renderPanel(search(INDEX_ALL, q), q);
  }, 120);

  input.addEventListener('input', updateList);

  input.addEventListener('keydown', (e) => {
    const items = [...panel.querySelectorAll('.dropdown-item')];
    const count = items.length;
    if (!count) { if (e.key === 'Enter') e.preventDefault(); return; }

    if (e.key === 'ArrowDown') {
      e.preventDefault();
      activeIndex = (activeIndex + 1) % count;
      setActiveItem(activeIndex);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      activeIndex = (activeIndex - 1 + count) % count;
      setActiveItem(activeIndex);
    } else if (e.key === 'Enter') {
      e.preventDefault();
      const idx = Math.max(0, activeIndex);
      const result = currentResults[idx];
      if (result && result.href) window.location.href = result.href;
    } else if (e.key === 'Escape') {
      ensurePanelOpenState(false);
    }
  });

  input.addEventListener('focus', () => {
    const q = input.value.trim();
    renderPanel(search(INDEX_ALL, q), q);
  });

  input.addEventListener('blur', () => {
    setTimeout(() => ensurePanelOpenState(false), 120);
  });

})();