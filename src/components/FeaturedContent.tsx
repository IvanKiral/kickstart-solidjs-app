import { Component, Show, createMemo } from "solid-js";
import { isArticleType, isEventType, LandingPageType } from "../model";
import PageSection from "./PageSection";
import FeaturedArticle from "./FeaturedArticle";
import FeaturedEvent from "./FeaturedEvent";
import Divider from "./Divider";

type FeaturedContentProps = {
  featuredContent: LandingPageType["elements"]["featured_content"];
};

const FeaturedContent: Component<FeaturedContentProps> = (props) => {
  const featuredArticle = createMemo(() => props.featuredContent.linkedItems.find(isArticleType));
  const featuredEvent = createMemo(() => props.featuredContent.linkedItems.find(isEventType));

  return (
    <>
      <Show when={featuredArticle() || featuredEvent()}>
        <h2 class="text-6xl text-azure text-center">
          Featured Content
        </h2>
      </Show>
      <Show when={featuredArticle()}>
        <PageSection color="bg-creme">
          <FeaturedArticle article={featuredArticle()!} />
        </PageSection>
      </Show>

      <Show when={featuredArticle() && featuredEvent()}>
        <Divider />
      </Show>

      <Show when={featuredEvent()}>
        <PageSection color="bg-white">
          <FeaturedEvent event={featuredEvent()!} />
        </PageSection>
      </Show>
    </>
  );
};

export default FeaturedContent;
