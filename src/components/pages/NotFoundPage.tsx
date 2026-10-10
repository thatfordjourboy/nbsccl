import { Link } from 'react-router-dom';
import { Button } from '../ui/button';
import { PageHero, Container } from '../site/blocks';

export function NotFoundPage() {
  return (
    <>
      <PageHero title="Page not found" intro="The page you were looking for does not exist or has moved." />
      <Container className="py-16">
        <Button asChild size="lg">
          <Link to="/">Go to the home page</Link>
        </Button>
      </Container>
    </>
  );
}
