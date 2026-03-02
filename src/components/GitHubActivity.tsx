import {GitHubCalendar} from "react-github-calendar";
import { FaGithub } from "react-icons/fa";
import {GITHUB_URL} from "../config";

const GithubActivity = () => {
  return (
    <section className="bg-[#0f172a] text-white py-20 px-6">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-12">
          <FaGithub className="text-3xl text-blue-500" />
          <h2 className="text-3xl font-bold tracking-tight">
            GitHub Activity
          </h2>
        </div>

        {/* Heatmap Card */}
        <div className="bg-[#1e293b] p-6 rounded-2xl shadow-lg border border-slate-700">
          <GitHubCalendar
            username="AnandaMuhuri"
            blockSize={15}
            blockMargin={5}
            fontSize={14}
            theme={{
              dark: [
                "#161b22",
                "#0e4429",
                "#006d32",
                "#26a641",
                "#39d353",
              ],
            }}
          />
        </div>

        {/* GitHub Profile Button */}
        <div className="mt-8">
          <a
            href={GITHUB_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 transition px-6 py-3 rounded-xl font-medium text-white"
          >
            View GitHub Profile
          </a>
        </div>

      </div>
    </section>
  );
};

export default GithubActivity;