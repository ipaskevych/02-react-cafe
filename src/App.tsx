import { useState } from 'react';
import type { Vetes, VoteType } from './types/votes';
import CafeInfo from './components/CafeInfo/CafeInfo';
import VoteOptions from './components/VoteOptions/VoteOptions';
import VoteStats from './components/VoteStats/VoteStats';
import Notification from './components/Notification/Notification';
import css from './App.module.css';

export default function App() {
  const [votes, setVotes] = useState<Vetes>({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const handleVote = (feedbackType: VoteType) => {
    setVotes((prev) => ({
      ...prev,
      [feedbackType]: prev[feedbackType] + 1,
    }));
  };

  const resetVotes = () => {
    setVotes({ good: 0, neutral: 0, bad: 0 });
  };

  const totalVotes = votes.good + votes.neutral + votes.bad;

  const positiveRate = totalVotes > 0 
    ? Math.round((votes.good / totalVotes) * 100) 
    : 0;

  return (
    <div className={css.app}>
      <CafeInfo />
      
      <VoteOptions 
        onVote={handleVote} 
        onReset={resetVotes} 
        canReset={totalVotes > 0} 
      />
      
      {totalVotes > 0 ? (
        <VoteStats 
          votes={votes} 
          totalVotes={totalVotes} 
          positiveRate={positiveRate} 
        />
      ) : (
        <Notification />
      )}
    </div>
  );
}