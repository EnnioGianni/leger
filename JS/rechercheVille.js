/* ===========================================================
   Titre : Recherche et navigation — Villes (A→Z, champ unique) — version robuste
   =========================================================== */
(() => {
  'use strict';

  /* --------- 0) TA LISTE PAR LETTRE (A et B incluses) --------- */
  const VILLES_BY_LETTER = {
    A: [
      { name: 'Abbeville', url: '../../Ville_A/Abbeville/abbeville.html' },
      { name: 'Abries', url: '../../Ville_A/Abries/abries.html' },
      { name: 'Agde', url: '../../Ville_A/Agde/agde.html' },
      { name: 'Agen', url: '../../Ville_A/Agen/agen.html' },
      { name: 'Ahun', url: '../../Ville_A/Ahun/ahun.html' },
      { name: 'L-Aigle', url: '../../Ville_A/L-Aigle/lAigle.html' },
      { name: 'Aignay-Le-Duc', url: '../../Ville_A/Aignay-Le-Duc/aignayLeDuc.html' },
      { name: 'Aigre', url: '../../Ville_A/AIGRE/aigre.html' },
      { name: 'Aigueperse', url: '../../Ville_A/Aigueperse/aigueperse.html' },
      { name: 'Aigues-Mortes', url: '../../Ville_A/Aigues-Mortes/aiguesMorte.html' },
      { name: 'Aiguillon', url: '../../Ville_A/Aiguillon/aiguiollon.html' },
      { name: 'Aire en Artois', url: '../../Ville_A/AireEnArtois/aireEnArtoi.html' },
      { name: 'AireEnGascogne', url: '../../Ville_A/AireEnGascogne/aireEnGascogne.html' },
      { name: 'Airvault', url: '../../Ville_A/Airvaut/airvault.html' },
      { name: 'Aix', url: '../../Ville_A/Aix/aix.html' },
      { name: 'Les-Aix-D-angillon', url: '../../Ville_A/Les-Aix-D-angillon/lesAixDangillon.html' },
      { name: 'Ajaccio', url: '../../Ville_A/Ajaccio/ajaccio.html/' },
      { name: 'Alais', url: '../../Ville_A/Alais/alais.html' },
      { name: 'Albert', url: '../../Ville_A/Albert/albert.html' },
      { name: 'Albi', url: '../../Ville_A/Albi/albi.html' },
      { name: 'Alencon', url: '../../Ville_A/Alencon/alencon.html' },
      { name: 'Alet', url: '../../Ville_A/Alet/alet.html' },
      { name: 'Altkirch', url: '../../Ville_A/Altkirch/altkirck.html' },
      { name: 'Alzonne', url: '../../Ville_A/Alzonne/alzonne.html' },
      { name: 'Amberieu-En-Bugey', url: '../../Ville_A/Amberieu-En-Bugey/amberieuEnBugey.html' },
      { name: 'Ambert', url: '../../Ville_A/Ambert/ambert.html' },
      { name: 'Amboise', url: '../../Ville_A/Amboise/amboise.html' },
      { name: 'Amiens', url: '../../Ville_A/Amiens/amiens.html' },
      { name: 'Ancenis', url: '../../Ville_A/Ancenis/ancenis.html' },
      { name: 'Ancy-Le-Franc', url: '../../Ville_A/Ancy-Le-Franc/ancyLeFranc.html' },
      { name: 'Les_Andelys', url: '../../Ville_A/Les_Andelys/lesAndelys.html' },
      { name: 'Andresy', url: '../../Ville_A/Andresy/andresy.html' },
      { name: 'Anduse', url: '../../Ville_A/Anduse/anduse.html' },
      { name: 'Angers', url: '../../Ville_A/Angers/angers.html' },
      { name: 'Angerville', url: '../../Ville_A/Angerville/angerville.html' },
      { name: 'Angles', url: '../../Ville_A/Angles/angles.html' },
      { name: 'Angouleme', url: '../../Ville_A/Angouleme/angoulemes.html' },
      { name: 'Annonay', url: '../../Ville_A/Annonay/annonay.html' },
      { name: 'Anse', url: '../../Ville_A/Anse/anse.html' },
      { name: 'Antibes', url: '../../Ville_A/Antibes/antibes.html' },
      { name: 'Antony', url: '../../Ville_A/Antony/antony.html' },
      { name: 'Antrain', url: '../../Ville_A/Antrain/antrain.html' },
      { name: 'Apt', url: '../../Ville_A/Apt/apt.html' },
      { name: 'Arbois', url: '../../Ville_A/Arbois/arbois.html' },
      { name: 'L-Arbresle', url: '../../Ville_A/L-Arbresle/larbresle.html' },
      { name: 'Arcis-Sur-Aube', url: '../../Ville_A/Arcis-Sur-Aube/arcisSurAube.html' },
      { name: 'Ardes', url: '../../Ville_A/Ardes/ardes.html' },
      { name: 'Ardres', url: '../../Ville_A/Ardres/ardres.html' },
      { name: 'Argeles', url: '../../Ville_A/Argeles/argeles.html' },
      { name: 'Argent', url: '../../Ville_A/Argent/argent.html' },
      { name: 'Argentan', url: '../../Ville_A/Argentan/argentan.html' },
      { name: 'Argentat', url: '../../Ville_A/Argentat/argentat.html' },
      { name: 'Argenteuil', url: '../../Ville_A/Argenteuil/argenteuil.html' },
      { name: 'Argenton', url: '../../Ville_A/Argenton/argenton.html' },
      { name: 'Argenton-Le-Chateau', url: '../../Ville_A/Argenton-Le-Chateau/argentonLeChateau.html' },
      { name: 'Arles', url: '../../Ville_A/Arles/arles.html' },
      { name: 'Arles-En-Roussillon', url: '../../Ville_A/Arles-En-Roussillon/arlesEnRoussillon.html' },
      { name: 'Armentieres', url: '../../Ville_A/Armentieres/armentieres.html' },
      { name: 'Arnac', url: '../../Ville_A/Arnac/arnac.html' },
      { name: 'Arnay-Le-Duc', url: '../../Ville_A/Arnay-Le-Duc/arnayLeDuc.html' },
      { name: 'Arnouville', url: '../../Ville_A/Arnouville/arnouville.html' },
      { name: 'Arpajon', url: '../../Ville_A/Arpajon/arpajon.html' },
      { name: 'Arras', url: '../../Ville_A/Arras/arras.html' },
      { name: 'Arreau', url: '../../Ville_A/Arreau/arreau.html' },
      { name: 'Ars-En-Re', url: '../../Ville_A/Ars-En-Re/arsEnRe.html' },
      { name: 'Arsac', url: '../../Ville_A/Arsac/arsac.html' },
      { name: 'Artenay', url: '../../Ville_A/Artenay/artenay.html' },
      { name: 'Astaffort', url: '../../Ville_A/Astaffort/astaffort.html' },
      { name: 'Ath', url: '../../Ville_A/Ath/ath.html' },
      { name: 'Attigny', url: '../../Ville_A/Attigny/attigny.html/' },
      { name: 'Aubagne', url: '../../Ville_A/Aubagne/aubagne.html' },
      { name: 'Aubenas', url: '../../Ville_A/Aubenas/aubenas.html' },
      { name: 'Aubenton', url: '../../Ville_A/Aubenton/aubenton.html' },
      { name: 'Aubigny', url: '../../Ville_A/Aubigny/aubigny.html' },
      { name: 'Aubusson', url: '../../Ville_A/Aubusson/aubusson.html' },
      { name: 'Auch', url: '../../Ville_A/Auch/auch.html/' },
      { name: 'Audenarde', url: '../../Ville_A/Audenarde/audenarde.html' },
      { name: 'Aulnay', url: '../../Ville_A/Aulnay/aulnay.html' },
      { name: 'Aumale', url: '../../Ville_A/Aumale/aumale.html' },
      { name: 'Aups', url: '../../Ville_A/Aups/aups.html' },
      { name: 'Auray', url: '../../Ville_A/Auray/auray.html' },
      { name: 'Aurillac', url: '../../Ville_A/Aurillac/aurillac.html' },
      { name: 'Auterive', url: '../../Ville_A/Auterive/auterive.html' },
      { name: 'Autun', url: '../../Ville_A/Autun/autun.html' },
      { name: 'Auxerre', url: '../../Ville_A/Auxerre/auxerre.html' },
      { name: 'Auxonne', url: '../../Ville_A/Auxonne/auxonne.html' },
      { name: 'Auxy-Le-Chateau', url: '../../Ville_A/Auxy-Le-Chateau/auxyLeChateau.html' },
      { name: 'Auzance', url: '../../Ville_A/Auzance/auzance.html' },
      { name: 'Avallon', url: '../../Ville_A/Avallon/avallon.html' },
      { name: 'Avesnes', url: '../../Ville_A/Avesnes/avesnes.html' },
      { name: 'Avenay', url: '../../Ville_A/Avenay/avenay.html' },
      { name: 'Avignon', url: '../../Ville_A/Avignon/avignon.html' },
      { name: 'Avranches', url: '../../Ville_A/Avranches/avranches.html' },
      { name: 'Ay', url: '../../Ville_A/Ay/Ay.html' },
      { name: 'Azille', url: '../../Ville_A/Azille/azille.html' },
      { name: 'Sommaire Ville A', url: '../../Ville_A/sommaireVilleA.html' },
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
        { name: 'La Baraque sous Gevrey', url: '../../Villes_B/baraque/Baraque.html' },
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
        { name: 'La Barre', url: '../../Villes_B/Barre/barre.html' },
        { name: 'La Bassee', url: '../../Villes_B/Basses/basses.html' },
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
        { name: 'Le Beausset', url: '../../Villes_B/Beausset/beausset.html' },
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
        { name: 'Le Blanc', url: '../../Villes_B/Blanc/blanc.html' },
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
        { name: 'Le Bolhard', url: '../../Villes_B/Bolhard/bolhard.html' },
        { name: 'Boncourt', url: '../../Villes_B/Boncourt/boncourt.html' },
        { name: 'Bondy', url: '../../Villes_B/Bondy/bondy.html' },
        { name: 'Bonifacio', url: '../../Villes_B/Bonifacio/bonifacio.html' },
        { name: 'Bonnelles', url: '../../Villes_B/Bonnelles/bonnelles.html' },
        { name: 'Bonnetable', url: '../../Villes_B/Bonnetable/bonnetable.html' },
        { name: 'Bonneval', url: '../../Villes_B/Bonneval/bonneval.html' },
        { name: 'Bonnieres', url: '../../Villes_B/Bonnieres/bonnieres.html' },
        { name: 'Bonny', url: '../../Villes_B/Bonny/bonny.html' },
        { name: 'Le Bordeau de Vigny', url: '../../Villes_B/Bordeau/bordeau.html' },
        { name: 'Bordeaux', url: '../../Villes_B/Bordeaux/bordeaux.html' },
        { name: 'Petite poste de Bordeaux', url: '../../Villes_B/Bordeauxpp/bordeauxpp.html' },
        { name: 'Bort', url: '../../Villes_B/Bort/bort.html' },
        { name: 'Bouchain', url: '../../Villes_B/Bouchain/bouchain.html' },
        { name: 'Boucoiran', url: '../../Villes_B/Boucoiran/boucoiran.html' },
        { name: 'Bouillon', url: '../../Villes_B/Bouillon/bouillon.html' },
        { name: 'Boulay', url: '../../Villes_B/Boulay/boulay.html' },
        { name: 'Boulogne', url: '../../Villes_B/Boulogne/Boulogne.html' },
        { name: 'Boulogne sur Mer', url: '../../Villes_B/BoulogneSurMer/boulogneSurMer.html' },
        { name: 'Boulou', url: '../../Villes_B/Boulou/boulou.html' },
        { name: 'Bouquenon', url: '../../Villes_B/Bouquenon/bouquenon.html' },
        { name: 'Bourbon L Archambault', url: '../../Villes_B/Bourbon/bourbon.html' },
        { name: 'Bourbon Lancy', url: '../../Villes_B/BourbonLancy/bourbonLancy.html' },
        { name: 'Bourbonne', url: '../../Villes_B/Bourbonne/bourbonne.html' },
        { name: 'Bourbourg', url: '../../Villes_B/Bourbourg/bourbourg.html' },
        { name: 'Bourdeilles', url: '../../Villes_B/Bourdeilles/bourdeilles.html' },
        { name: 'Bourg Argental', url: '../../Villes_B/BourgArgental/bourgArgental.html' },
        { name: 'Bourdon', url: '../../Villes_B/Bourdon/bourdon.html' },
        { name: 'Bourg D Oisans', url: '../../Villes_B/BourgDoisan/bourgDoisan.html' },
        { name: 'Bourg en Bresse', url: '../../Villes_B/BourgEnBresse/bourgEnBresse.html' },
        { name: 'Bourg en Guyenne', url: '../../Villes_B/BourgEnGuyenne/bourgEnGuyenne.html' },
        { name: 'Bourg la Reine', url: '../../Villes_B/BourgLaReine/bourgLaReine.html' },
        { name: 'Bourg St Andeol', url: '../../Villes_B/BourgStAndeol/bourgStAndeol.html' },
        { name: 'Bourgachard', url: '../../Villes_B/Bourgachard/bourgachard.html' },
        { name: 'Bourganeuf', url: '../../Villes_B/Bourganeuf/bourganeuf.html' },
        { name: 'Bourges', url: '../../Villes_B/Bourges/bourges.html' },
        { name: 'Le bourget', url: '../../Villes_B/Bourget/bourget.html' },
        { name: 'Bourgneuf', url: '../../Villes_B/Bourgneuf/bourgneuf.html' },
        { name: 'Bourgneuf en Retz', url: '../../Villes_B/BourgneufEnRetz/bourgneufEnRetz.html' },
        { name: 'Bourgoin', url: '../../Villes_B/Bourgoin/bourgoin.html' },
        { name: 'Bourgtheroude', url: '../../Villes_B/Bourgtheroulde/bourgtheroulde.html' },
        { name: 'Bourgueil', url: '../../Villes_B/Bourgueil/bourgueil.html' },
        { name: 'Bourmont', url: '../../Villes_B/Bourmont/bourmont.html' },
        { name: 'Boussac', url: '../../Villes_B/Boussac/boussac.html' },
        { name: 'Bouxwiller', url: '../../Villes_B/Bouxwiller/bouxwiller.html' },
        { name: 'Bouzonville', url: '../../Villes_B/Bouzonville/bouzonville.html' },
        { name: 'Boynes', url: '../../Villes_B/Boynes/boynes.html' },
        { name: 'Braisne', url: '../../Villes_B/Braisne/braisne.html' },
        { name: 'Bray sur Seine', url: '../../Villes_B/Bray/bray.html' },
        { name: 'Brecey', url: '../../Villes_B/Brecey/brecey.html' },
        { name: 'Bressuire', url: '../../Villes_B/Bressuire/bressuire.html' },
        { name: 'Brest', url: '../../Villes_B/Brest/brest.html' },
        { name: 'La Breteche', url: '../../Villes_B/Breteche/breteche.html' },
        { name: 'Breteuil (26)', url: '../../Villes_B/Breteuil26/breteuil26.html' },
        { name: 'Breteuil (58)', url: '../../Villes_B/Breteuil58/breteuil58.html' },
        { name: 'Brezolle', url: '../../Villes_B/Brezolle/brezolle.html' },
        { name: 'Briancon', url: '../../Villes_B/Briancon/briancon.html' },
        { name: 'Briare', url: '../../Villes_B/Briare/briare.html' },
        { name: 'Brie comte Robert', url: '../../Villes_B/Brie/brie.html' },
        { name: 'Brienne le Château', url: '../../Villes_B/Brienne/brienne.html' },
        { name: 'Brienon L Archeveque', url: '../../Villes_B/Brienon/brienon.html' },
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
        { name: 'Le Bugue', url: '../../Villes_B/Buis/buis.html' },
        { name: 'La Buissiere', url: '../../Villes_B/Buissieres/buissieres.html' },
        { name: 'Buzancais', url: '../../Villes_B/Buzancais/buzancais.html' },
        { name: 'Buzancy', url: '../../Villes_B/Buzancy/buzancy.html' },   
    ],
    C: [], D: [], E: [], F: [], G: [], H: [], I: [], J: [], K: [],
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