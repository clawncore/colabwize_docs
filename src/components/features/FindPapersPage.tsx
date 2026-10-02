import { Link } from "react-router-dom";
import {
  ArrowLeft,
  Search,
  Library,
  FileCheck,
  Zap,
  Brain,
  Award,
  Filter,
  Plus,
  Database,
  ExternalLink,
  Loader2,
  AlertTriangle,
  CreditCard,
} from "lucide-react";
import {
  Step,
  InfoBox,
  Tip,
  NumberedSection,
  VideoPlaceholder,
  DocFooter,
} from "../docs/DocBlocks";

const Figure = ({
  src,
  alt,
  caption,
}: {
  src: string;
  alt: string;
  caption: string;
}) => (
  <figure className="my-6">
    <img
      src={src}
      alt={alt}
      className="w-full rounded-xl border border-gray-200"
    />
    <figcaption className="text-center text-xs text-gray-500 mt-2">
      {caption}
    </figcaption>
  </figure>
);

const FindPapersPage = () => {
  return (
    <div className="min-h-screen px-8">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="container-custom py-6">
          <Link to="/" className="inline-flex items-center mb-4">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Documentation
          </Link>
          <div className="text-center">
            <Search className="h-16 w-16 mx-auto mb-4 text-blue-600" />
            <h1 className="text-3xl font-bold mb-2">Find Papers</h1>
            <p className="text-lg text-gray-600">
              Search 7 academic databases in parallel, add verified sources to
              your project, and manage your research library — all without
              leaving the editor.
            </p>
          </div>
        </div>
      </div>

      <div className="container-custom py-8 max-w-4xl mx-auto">
        {/* Overview */}
        <section className="mb-10">
          <p className="text-gray-700 leading-relaxed mb-4">
            <strong>Find Papers</strong> is ColabWize's integrated literature
            discovery capability. It lets you search scholarly databases
            (CrossRef, OpenAlex, arXiv, PubMed, Semantic Scholar, IEEE, DOAJ)
            from inside the editor, browse matching publications with rich
            metadata, and add verified sources straight into your project's
            source collection and research library. There is no need to switch
            tabs or copy citations in by hand.
          </p>
          <InfoBox>
            Find Papers works as one continuous workflow: open the Sources
            panel, search the literature, then save papers into your project.
            Added papers sync to your research library for future projects. The
            panel also powers the "Find Missing Link" feature in the Citation
            Confidence panel.
          </InfoBox>
        </section>

        {/* Feature highlights */}
        <section className="mb-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="border border-gray-200 rounded-xl p-6">
              <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-blue-100 text-blue-600 mb-4">
                <Zap className="h-5 w-5" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-1">
                7 Databases in Parallel
              </h3>
              <p className="text-sm text-gray-600">
                CrossRef, OpenAlex, arXiv, PubMed, Semantic Scholar, IEEE
                Xplore, DOAJ — searched simultaneously with in-memory caching
                (1-hour TTL, 500-entry limit).
              </p>
            </div>
            <div className="border border-gray-200 rounded-xl p-6">
              <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-blue-100 text-blue-600 mb-4">
                <Brain className="h-5 w-5" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-1">
                Smart Deduplication & Ranking
              </h3>
              <p className="text-sm text-gray-600">
                Results deduplicated by normalized title (near-duplicate
                detection), ranked by Semantic Scholar priority + citation
                count. Semantic Scholar prioritized as highest-quality source.
              </p>
            </div>
            <div className="border border-gray-200 rounded-xl p-6">
              <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-blue-100 text-blue-600 mb-4">
                <Award className="h-5 w-5" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-1">
                Credibility Scoring
              </h3>
              <p className="text-sm text-gray-600">
                Batch AI credibility assessment (peer-reviewed vs preprint,
                citation count, journal impact) with visual badges on each
                result.
              </p>
            </div>
          </div>
        </section>

        {/* Additional capabilities */}
        <section className="mb-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="border border-gray-200 rounded-xl p-6">
              <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-blue-100 text-blue-600 mb-4">
                <Filter className="h-5 w-5" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-1">
                Auto-Search from Context
              </h3>
              <p className="text-sm text-gray-600">
                Citation Confidence panel can pass keywords ("Find Missing
                Link") to auto-populate search and run query immediately.
              </p>
            </div>
            <div className="border border-gray-200 rounded-xl p-6">
              <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-blue-100 text-blue-600 mb-4">
                <Plus className="h-5 w-5" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-1">
                One-Click Add to Sources
              </h3>
              <p className="text-sm text-gray-600">
                Click "+ Add to Sources" to save paper to project collection.
                Precomputed citation formats (APA, MLA, Chicago, IEEE, Harvard)
                generated automatically.
              </p>
            </div>
            <div className="border border-gray-200 rounded-xl p-6">
              <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-blue-100 text-blue-600 mb-4">
                <Database className="h-5 w-5" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-1">
                Research Library Sync
              </h3>
              <p className="text-sm text-gray-600">
                Added papers available in Library panel for future projects. DOI
                import, URL import, and batch analysis also supported.
              </p>
            </div>
          </div>
        </section>

        {/* Usage Limits */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <CreditCard className="h-6 w-6 text-amber-600" />
            Usage Limits by Plan
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
            <div className="border border-gray-200 rounded-xl p-4 text-center">
              <h3 className="font-semibold text-gray-900 mb-2">Free</h3>
              <p className="text-3xl font-bold text-red-600 mb-1">3 / month</p>
              <p className="text-sm text-gray-600">Paper searches per month</p>
            </div>
            <div className="border border-indigo-200 rounded-xl p-4 text-center bg-indigo-50">
              <h3 className="font-semibold text-gray-900 mb-2">
                Plus / Researcher
              </h3>
              <p className="text-3xl font-bold text-indigo-600 mb-1">
                25 / month
              </p>
              <p className="text-sm text-gray-600">
                Paper searches + credits for overages
              </p>
            </div>
            <div className="border border-gray-200 rounded-xl p-4 text-center">
              <h3 className="font-semibold text-gray-900 mb-2">
                Institutional
              </h3>
              <p className="text-3xl font-bold text-gray-900 mb-1">Custom</p>
              <p className="text-sm text-gray-600">
                Volume licensing, unlimited searches
              </p>
            </div>
          </div>
          <div className="border border-amber-200 rounded-lg p-4 bg-amber-50">
            <h4 className="font-semibold text-amber-900 mb-2 flex items-center gap-2">
              <AlertTriangle className="h-5 w-5" />
              Limit Enforcement
            </h4>
            <ul className="space-y-1 text-sm text-amber-800">
              <li>
                • Client-side pre-check: warns before search if Free plan limit
                (3) reached
              </li>
              <li>• Server-side enforcement: 403 if quota exceeded</li>
              <li>
                • Credit overage: Free users with credits can spend 1 credit per
                search
              </li>
              <li>
                • "Run Self-Plagiarism Check" button does not count against
                search quota
              </li>
            </ul>
          </div>
        </section>

        {/* Video */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-2">Watch the walkthrough</h2>
          <p className="text-gray-600 mb-2">
            From launching Find Papers to a saved source in your library.
          </p>
          <VideoPlaceholder
            title="Find Papers walkthrough"
            length="~2 minutes"
          />
        </section>

        {/* Find Papers 1 — Opening the feature */}
        <NumberedSection n={1} title="Open the Find Papers feature">
          <p className="text-gray-700 leading-relaxed mb-4">
            Find Papers launches from inside the editor. Look for the{" "}
            <span className="font-medium">Sources</span>
            button in the editor's bottom action bar (or Citation Audit sidebar)
            and click it to open the Sources panel — this is where literature
            discovery takes place.
          </p>
          <Figure
            src="/images/find-papers-1.png"
            alt="Sources button in the bottom action bar and the Sources sidebar it opens"
            caption="Find Papers 1: Opening the Sources panel from the editor."
          />
          <p className="text-gray-700 leading-relaxed mb-4">
            The numbered labels in the image show how the feature is accessed:
          </p>
          <ul className="space-y-3 mb-4">
            <li className="flex items-start">
              <span className="h-6 w-6 rounded-full bg-blue-600 text-white text-xs font-semibold flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                1
              </span>
              <span className="text-gray-700">
                <span className="font-medium">The Sources button</span> in the
                bottom action bar (or Citation Audit sidebar). This is the entry
                point to open the scholarly source search panel.
              </span>
            </li>
            <li className="flex items-start">
              <span className="h-6 w-6 rounded-full bg-blue-600 text-white text-xs font-semibold flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                2
              </span>
              <span className="text-gray-700">
                <span className="font-medium">The Sources panel</span> that
                opens after clicking the button. This panel contains the search
                interface, results, and your current project sources.
              </span>
            </li>
          </ul>
          <Tip>
            Keep the Sources panel open while you write. You can run a new
            search and add more papers at any point without leaving your
            document. The panel also appears when you click "Find Missing Link"
            in the Citation Confidence panel — it auto-populates keywords from
            the confidence analysis.
          </Tip>
        </NumberedSection>

        {/* Find Papers 2 — Searching and viewing results */}
        <NumberedSection
          n={2}
          title="Search scholarly databases and view results"
        >
          <p className="text-gray-700 leading-relaxed mb-4">
            With the panel open, enter your search terms in the search interface
            and run the search. You can look up a topic, paper title, author
            name, DOI, or other keywords. The search queries all 7 academic
            databases in parallel.
          </p>
          <Step n={1} title="Enter your search terms">
            Type a topic, paper title, author, or DOI. The more specific you
            are, the more relevant the results. Quick-filter chips: Articles,
            Books, Websites, All.
          </Step>
          <Step n={2} title="Review the results">
            ColabWize returns matching scholarly publications with rich
            metadata. Each result includes: title, authors, year, journal/venue,
            citation count, source database, peer-reviewed/preprint badge, and
            AI credibility score badge. Click "+ Add to Sources" to save.
          </Step>
          <Figure
            src="/images/find-papers-2.png"
            alt="Search interface and scholarly search results returned by Find Papers"
            caption="Find Papers 2: Searching scholarly databases and viewing results with credibility badges."
          />
          <p className="text-gray-700 leading-relaxed mb-4">
            The numbered labels in the image show the search workflow:
          </p>
          <ul className="space-y-3 mb-4">
            <li className="flex items-start">
              <span className="h-6 w-6 rounded-full bg-blue-600 text-white text-xs font-semibold flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                1
              </span>
              <span className="text-gray-700">
                <span className="font-medium">The search interface</span>, where
                you enter keywords, paper titles, author names, DOI, or other
                search terms and execute the search. Shows search history and
                quick-filter chips.
              </span>
            </li>
            <li className="flex items-start">
              <span className="h-6 w-6 rounded-full bg-blue-600 text-white text-xs font-semibold flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                2
              </span>
              <span className="text-gray-700">
                <span className="font-medium">
                  The scholarly search results
                </span>{" "}
                returned by the system, showing available publications with
                metadata and an option to add each source. Results paginated (10
                per page, "Load More" button).
              </span>
            </li>
          </ul>
          <InfoBox>
            Results include the metadata you need to decide if a source fits
            your work: citation count, journal, open-access PDF link (when
            available), and credibility badge. Add the ones you want and keep
            browsing for more.
          </InfoBox>
        </NumberedSection>

        {/* Find Papers 3 — Adding papers to sources and library */}
        <NumberedSection n={3} title="Add papers to your sources and library">
          <p className="text-gray-700 leading-relaxed mb-4">
            When you add a paper, ColabWize saves it into your project's source
            collection and makes it available in your research library, so the
            reference is ready to cite and reuse later.
          </p>
          <Step n={1} title="Add a paper to your sources">
            Click the <span className="font-medium">+ Add to Sources</span>{" "}
            button on a result. The paper moves into your project's source
            collection. Button changes to
            <span className="font-medium text-green-700">
              ✓ In Sources
            </span>{" "}
            when added.
          </Step>
          <Step n={2} title="Precomputed citation formats generated">
            Backend automatically generates formatted citations for APA, MLA,
            Chicago, IEEE, Harvard using{" "}
            <code>generatePrecomputedCitations()</code>. Stored with the
            citation for instant use in export and bibliography.
          </Step>
          <Step n={3} title="Use and reuse the reference">
            Added papers appear in the Sources panel for the current document
            and in the Library panel for future access and management. They're
            also available to the AI Research Assistant as "projectSources"
            context.
          </Step>
          <Figure
            src="/images/find-papers-3.png"
            alt="A paper added to sources, the project Sources panel, and the integrated Library panel"
            caption="Find Papers 3: Adding papers to the project sources and synchronizing them with the research library."
          />
          <p className="text-gray-700 leading-relaxed mb-4">
            The numbered labels in the image show how selected papers are
            stored:
          </p>
          <ul className="space-y-3 mb-4">
            <li className="flex items-start">
              <span className="h-6 w-6 rounded-full bg-blue-600 text-white text-xs font-semibold flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                1
              </span>
              <span className="text-gray-700">
                <span className="font-medium">A paper already added</span> to
                the project's source collection, shown as "In Sources" with
                green badge.
              </span>
            </li>
            <li className="flex items-start">
              <span className="h-6 w-6 rounded-full bg-blue-600 text-white text-xs font-semibold flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                2
              </span>
              <span className="text-gray-700">
                <span className="font-medium">The project's Sources panel</span>
                , which maintains the collection of references selected for the
                current document.
              </span>
            </li>
            <li className="flex items-start">
              <span className="h-6 w-6 rounded-full bg-blue-600 text-white text-xs font-semibold flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                3
              </span>
              <span className="text-gray-700">
                <span className="font-medium">
                  The integrated Library panel
                </span>
                , showing that imported papers are available within your
                research library for future access and management.
              </span>
            </li>
          </ul>
          <InfoBox>
            Because added papers sync to your research library, you can cite
            them in this document and find them again in later projects. The AI
            Research Assistant also receives them as context for answering "What
            do these sources say about X?"
          </InfoBox>
        </NumberedSection>

        {/* Advanced Features */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Advanced Features</h2>
          <div className="space-y-4">
            <div className="border border-gray-200 rounded-xl p-4">
              <h3 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                <Zap className="h-5 w-5 text-indigo-600" />
                Find Missing Link (Citation Confidence Integration)
              </h3>
              <p className="text-gray-700 text-sm">
                In the Citation Confidence panel, clicking "Find Missing Link"
                extracts keywords from low-coverage sections and opens the
                Sources panel with auto-populated search query. Calls{" "}
                <code>
                  CitationService.findMissingLink(projectId, keywords, field)
                </code>
                which hits <code>POST /api/citations/find-missing-link</code> →
                backend runs
                <code>AcademicSearchService.searchPapers()</code> → returns
                suggestions.
              </p>
            </div>
            <div className="border border-gray-200 rounded-xl p-4">
              <h3 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                <Brain className="h-5 w-5 text-indigo-600" />
                AI Credibility Badges
              </h3>
              <p className="text-gray-700 text-sm">
                After search,{" "}
                <code>apiClient.post("/api/citations/batch-credibility")</code>
                sends up to 10 papers for batch AI assessment. Returns: level
                (high/medium/low), score (0-100), flags. Displayed as colored
                badge: High (green), Medium (blue), Low (amber). Plus plan
                required for AI badges.
              </p>
            </div>
            <div className="border border-gray-200 rounded-xl p-4">
              <h3 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                <ExternalLink className="h-5 w-5 text-indigo-600" />
                DOI & URL Import
              </h3>
              <p className="text-gray-700 text-sm">
                <code>CitationService.importFromDOI(doi)</code> and{" "}
                <code>importFromURL(url)</code>
                fetch full metadata from CrossRef or page scraping.
                Auto-generates formatted citations and adds to project. DOI
                import validates via CrossRef API.
              </p>
            </div>
            <div className="border border-gray-200 rounded-xl p-4">
              <h3 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                <Loader2 className="h-5 w-5 text-indigo-600" />
                Real-Time Single-Citation Verification
              </h3>
              <p className="text-gray-700 text-sm">
                <code>
                  CitationService.verifySingleCitation(&#123;title, doi&#125;)
                </code>{" "}
                checks CrossRef, PubMed, arXiv, OpenAlex in sequence. Returns{" "}
                <code>
                  &#123;vault_verified: true, source: 'crossref'&#125;
                </code>{" "}
                on first match. Used for Integrity Linter fast feedback loop.
              </p>
            </div>
            <div className="border border-gray-200 rounded-xl p-4">
              <h3 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                <Award className="h-5 w-5 text-indigo-600" />
                Citation Auto-Fixer
              </h3>
              <p className="text-gray-700 text-sm">
                <code>CitationService.findCitationMetadata(query)</code> →{" "}
                <code>POST /api/citations/auto-fix</code> → searches CrossRef
                first, then OpenAlex → returns complete metadata (title, author,
                year, DOI, source). Used for quick citation insertion when you
                have a fuzzy title.
              </p>
            </div>
            <div className="border border-gray-200 rounded-xl p-4">
              <h3 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                <FileCheck className="h-5 w-5 text-indigo-600" />
                Batch AI Analysis (Literature Matrix)
              </h3>
              <p className="text-gray-700 text-sm">
                <code>
                  CitationService.batchAnalyzeCitations(projectId, force)
                </code>{" "}
                analyzes all project citations with AI for themes, methodology,
                findings, gaps. Results used in Literature Matrix panel.{" "}
                <code>force=true</code> re-analyzes cached.
              </p>
            </div>
          </div>
        </section>

        {/* Technical Details */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Technical Details</h2>
          <div className="space-y-4">
            <div className="border border-gray-200 rounded-xl p-4">
              <h3 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                <Database className="h-5 w-5 text-indigo-600" />
                AcademicSearchService (Backend)
              </h3>
              <p className="text-gray-700 text-sm">
                <code>searchPapers(query, limit=50)</code> → parallel{" "}
                <code>Promise.allSettled</code>
                across 7 providers (SemanticScholar, OpenAlex, Arxiv, Pubmed,
                IEEE, DOAJ, CrossRef). In-memory SHA-256 cache by normalized
                query (1hr TTL, 500 max entries). Deduplication: normalized
                title lowercase + punctuation removal + substring check.
                Ranking: Semantic Scholar first, then citation count desc.
              </p>
            </div>
            <div className="border border-gray-200 rounded-xl p-4">
              <h3 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                <Zap className="h-5 w-5 text-indigo-600" />
                SemanticScholarService Rate Limiting
              </h3>
              <p className="text-gray-700 text-sm">
                Enforces 1 request/second via promise queue (
                <code>waitForRateLimit()</code>). API key from SecretsService.
                Fields: paperId, title, authors, year, abstract, url,
                citationCount, isOpenAccess, openAccessPdf, venue.
              </p>
            </div>
            <div className="border border-gray-200 rounded-xl p-4">
              <h3 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                <Brain className="h-5 w-5 text-indigo-600" />
                Frontend: PaperSuggestionsPanel
              </h3>
              <p className="text-gray-700 text-sm">
                Manages search state, pagination (10/page), limit dialog (Free:
                3/mo), credibility scores Map, added paper tracking. Auto-search
                on
                <code>contextKeywords</code> prop change.{" "}
                <code>executeSearch()</code> checks plan limits client-side
                before calling <code>CitationService.searchPapers()</code>.
              </p>
            </div>
            <div className="border border-gray-200 rounded-xl p-4">
              <h3 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                <Filter className="h-5 w-5 text-indigo-600" />
                SearchCitationForm (Alternative UI)
              </h3>
              <p className="text-gray-700 text-sm">
                Separate component used in other contexts (e.g.,
                InsertCitationModal). Quick filters: Articles, Books, Websites,
                Conference. Results show type icons, citation count, subjects.
                Calls <code>onSelect(result)</code> to add citation.
              </p>
            </div>
            <div className="border border-gray-200 rounded-xl p-4">
              <h3 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                <ExternalLink className="h-5 w-5 text-indigo-600" />
                Citation Metadata Model
              </h3>
              <p className="text-gray-700 text-sm">
                <code>StoredCitation</code> interface (100+ fields): title,
                authors, year, journal, DOI, URL, citationCount, abstract,
                formatted_citations (APA/MLA/Chicago/IEEE/ Harvard precomputed),
                tags, raw_metadata, identifiers, provider, providerId, themes,
                matrix_notes, verified, database, itemType, sourceType, pmid,
                pmcid, issn, impactFactor, openAccess, license, extra,
                dateAdded, dateModified...
              </p>
            </div>
          </div>
        </section>

        <DocFooter
          nextTo="/literature-review"
          nextLabel="Next: Literature Review"
          helpText="Trouble finding a source, or not sure which paper to cite? We can help."
        />
      </div>
    </div>
  );
};

export default FindPapersPage;
