<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>403 Forbidden - Access Denied</title>
    <style>
        :root {
            --primary-color: #4f46e5;
            --error-color: #dc2626;
            --text-color: #374151;
            --light-bg: #f9fafb;
        }

        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        }

        body {
            background-color: var(--light-bg);
            color: var(--text-color);
            height: 100vh;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            text-align: center;
            padding: 20px;
            line-height: 1.6;
        }

        .error-container {
            max-width: 600px;
            width: 100%;
            background: white;
            padding: 40px;
            border-radius: 12px;
            box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
        }

        .error-code {
            font-size: 72px;
            font-weight: 700;
            color: var(--error-color);
            margin-bottom: 16px;
        }

        .error-title {
            font-size: 24px;
            font-weight: 600;
            margin-bottom: 12px;
        }

        .error-message {
            font-size: 16px;
            margin-bottom: 24px;
            color: #6b7280;
        }

        .error-icon {
            font-size: 80px;
            margin-bottom: 24px;
            color: var(--error-color);
        }

        .btn {
            display: inline-block;
            padding: 12px 24px;
            background-color: var(--primary-color);
            color: white;
            text-decoration: none;
            border-radius: 6px;
            font-weight: 500;
            transition: all 0.3s ease;
            margin-top: 16px;
        }

        .btn:hover {
            background-color: #4338ca;
            transform: translateY(-2px);
            box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
        }

        .btn-secondary {
            background-color: white;
            color: var(--primary-color);
            border: 1px solid var(--primary-color);
            margin-left: 12px;
        }

        .btn-secondary:hover {
            background-color: #eef2ff;
        }

        @media (max-width: 640px) {
            .error-code {
                font-size: 60px;
            }

            .btn-container {
                display: flex;
                flex-direction: column;
            }

            .btn {
                width: 100%;
            }

            .btn-secondary {
                margin-left: 0;
                margin-top: 12px;
            }
        }
    </style>
</head>

<body>
    <div class="error-container">
        <div class="error-icon">🚫</div>
        <div class="error-code">403</div>
        <h1 class="error-title">Access Denied</h1>
        <p class="error-message">
            You don't have permission to access this page.
            Please contact the administrator if you believe this is an error.
        </p>
        <div class="btn-container">
            <a href="{{ route('dashboard') }}" class="btn">Return Home</a>
            <a href="mailto:admin@example.com" class="btn btn-secondary">Contact Support</a>
        </div>
    </div>
</body>

</html>
