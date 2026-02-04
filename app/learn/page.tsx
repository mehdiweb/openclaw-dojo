import { redirect } from 'next/navigation';

export default function LearnPage() {
    // Redirect to first module
    redirect('/learn/1');
}
